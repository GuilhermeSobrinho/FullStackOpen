import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.get().then((personsData) => {
      setPersons(personsData);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (newName.length === 0) {
      alert("Insert name pls!");
    } else if (newNumber.length === 0) {
      alert("Insert number pls!");
    } else {
      const personAlready = persons.filter((person) => person.name === newName);
      if (personAlready.length !== 0) {
        const personName = personAlready[0].name;
        const personId = personAlready[0].id;
        alert(`${newName} is already added to phonebook with ${personName}`);
        if (
          window.confirm(`You want to replace the old number with a new one ?`)
        ) {
          const updatedPerson = { ...personAlready[0], number: newNumber };
          personService
            .update(personId, updatedPerson)
            .then((returnedPerson) => {
              setPersons(
                persons.map((personItem) =>
                  personItem.id !== personId ? personItem : returnedPerson
                )
              );
            });
        }
      } else {
        let index = persons.length - 1;
        let lastId = persons[index].id;
        let id = lastId + 1;
        console.log("ID: " + id);
        const personObject = {
          name: newName,
          number: newNumber,
          id: id,
        };
        personService.create(personObject).then((returnedPerson) =>
          setPersons(persons.concat(returnedPerson)).catch((error) => {
            console.log(error.response.data.error);
          })
        );
      }
    }
    setMessage(`Added ${newName}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (id) => {
    const filteredPerson = persons.filter((person) => person.id === id);
    const personName = filteredPerson[0].name;
    const personId = filteredPerson[0].id;
    if (window.confirm(`Are you sure to delete ${personName} ?`)) {
      personService.remove(personId);
      setPersons(persons.filter((person) => person.id !== personId));
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  const personToShow = persons
    ? persons.filter((person) =>
      person.name.toUpperCase().includes(newFilter.toUpperCase())
    )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons personToShow={personToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
