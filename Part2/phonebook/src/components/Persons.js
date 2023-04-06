
const Persons = ({ personToShow, deletePerson }) => {

    /*function deletePerson (person) {
        console.log("Estou n obotão!")
        console.log("Este é o id: "+person.id)
        if (window.confirm(`Are you sure to Delete ${person.name} ?`)) {
            personService.remove(person.id)
            setNewMessage(`${person.name} Removed successfuly !`)
            alert(newMessage)
        }
        console.log("Person to Show: "+personToShow);
        
      }
*/
    return (
      <div>
        {personToShow.map(person => (
          <div key={person.name}>
            {person.name} {person.number}   <button onClick={() => deletePerson(person.id)}>delete</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Persons;
