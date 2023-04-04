import { useState } from "react";



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const DisplayVotes = ({ votesCounted }) => {
  
    return <div>has {votesCounted} votes</div>;
 
};

const DisplayMostVoted = (props) => {
  const highestVoted = Math.max(...props.allVotes)

  if (highestVoted === 0) {
    return (
    <p>
      No votes yet!
    </p>
    )
  }

  const anecdoteIndex = props.allVotes.indexOf(highestVoted)
  const anecdoteMostVoted = props.anecdotes[anecdoteIndex]

  return (
    <div>
      <p>{anecdoteMostVoted}</p>
      <p>has {highestVoted} votes!</p>
    </div>
  )
};

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const title = "Anecdote of the day"
  const subtitle = "Anecdote with most votes"
  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(anecdotes.length).fill(0));

  const randomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const vote = () => {
    const votes = [...allVotes];
    votes[selected] += 1;
    setAllVotes(votes);
  };

  return (
    
    <div>
      <Header title={title}/>
      {anecdotes[selected]}
      <DisplayVotes votesCounted={allVotes[selected]} />
      <div>
        <Button handleClick={randomNumber} text="next anecdote" />
        <Button handleClick={vote} text="vote" />
      </div>
      <Header title={subtitle}/>
      <DisplayMostVoted anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );

  
};



export default App;
