import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const headings = {
    h1: "Anecdote of the day",
    h2: "Anecdote with most votes",
  };

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
  const numAnecdotes = anecdotes.length;
  const [votes, setVotes] = useState(Array(numAnecdotes).fill(0));

  const [selected, setSelected] = useState(
    Math.floor(Math.random() * numAnecdotes)
  );

  const incrementVote = () => {
    const increasedVotes = [...votes];
    increasedVotes[selected] += 1;
    setVotes(increasedVotes);
  };

  console.log(selected);
  console.log(votes);

  return (
    <>
      <Heading text={headings.h1} />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button
        handleClick={() => {
          setSelected(Math.floor(Math.random() * numAnecdotes));
        }}
        text="next anecdote"
      />
      <Button handleClick={incrementVote} text="vote" />
      <Heading text={headings.h2} />
      <div>{anecdotes[votes.indexOf(Math.max(...votes))]}</div>
    </>
  );
};

export default App;
