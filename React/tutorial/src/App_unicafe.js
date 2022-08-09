import { useState } from 'react'

const StatisticLine = (props) => {
    if (props.denominator === 0) {
        return (
            <div>
                Can't calculate
            </div>
        )
    }
    if (props.text === 'Positive') {
        return (
            <tr>
                <td>{props.text} </td>
                <td>{(props.numerator / props.denominator) * 100}%</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{props.text} </td>
            <td>{props.numerator / props.denominator}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad, total }) => {
    if (total === 0) {
        return (
            <div>
                Give feedback first
            </div>
        )
    }
    return (
    <table>
        <StatisticLine text={'Good'} numerator={good} denominator={1} />
        <StatisticLine text={'Neutral'} numerator={neutral} denominator={1} />
        <StatisticLine text={'Bad'} numerator={bad} denominator={1} />
        <StatisticLine text={'Total'} numerator={total} denominator={1} />
        <StatisticLine text={'Average'} numerator={good - bad} denominator={good + bad + neutral} />
        <StatisticLine text={'Positive'} numerator={good} denominator={good + bad + neutral} />
    </table>)
}

const Button = ({ text, onClick }) => {
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}

const Buttons = ({addBad, addGood, addNeutral, reduceBad, reduceGood, reduceNeutral}) => {
    return (
        <div>
            <Button onClick={addGood} text={'Add Good'} />
            <Button onClick={addNeutral} text={'Add Neutral'} />
            <Button onClick={addBad} text={'Add Bad'} />
            <Button onClick={reduceGood} text={'Reduce Good'} />
            <Button onClick={reduceNeutral} text={'Reduce Neutral'} />
            <Button onClick={reduceBad} text={'Reduce Bad'} />
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const addGood = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }
    const reduceGood = () => {
        setGood(good - 1)
        setTotal(total + 1)
    }

    const addNeutral = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }
    const reduceNeutral = () => {
        setNeutral(neutral - 1)
        setTotal(total + 1)
    }

    const addBad = () => {
        setBad(bad + 1)
        setTotal(total + 1)
    }
    const reduceBad = () => {
        setBad(bad - 1)
        setTotal(total + 1)
    }

    return (
        <div>
            <h2>Give feedback</h2>
            <Buttons addBad={addBad} addGood={addGood} addNeutral={addNeutral} reduceBad={reduceBad} reduceGood={reduceGood} reduceNeutral={reduceNeutral} />
            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </div>
    )
}

export default App