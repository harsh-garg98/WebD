import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, addVotes] = useState({
        0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
    })

    const selectAnecdote = () => {
        const getRandomNumber = () => {
            const randNum = Math.floor(Math.random() * anecdotes.length)
            return randNum
        }
        setSelected(getRandomNumber)
    }

    const plusVote = () => {
        const copy = { ...votes }
        copy[selected] += 1
        addVotes(copy)
    }

    const getMostPopular = () => {
        const votesValues = Object.values(votes)
        const indexMax = votesValues.indexOf(Math.max(...votesValues))
        return anecdotes[indexMax]
    }


    return (
        <div>
            <h2>Anecdote of the day</h2>
            <div>
                {anecdotes[selected]}
            </div>
            <div>
                has {votes[selected]} votes
            </div>
            <div>
                <button onClick={plusVote}>
                    Vote
                </button>
                <button onClick={selectAnecdote}>
                    Next Anecdote
                </button>
            </div>
            <h2>Most popular anecdote</h2>
            <div>
                {getMostPopular()}
            </div>
        </div>
    )
}

export default App