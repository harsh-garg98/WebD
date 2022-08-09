import axios from 'axios'
import { useState, useEffect } from 'react'

const Filter = ({ onChange }) => {
    return (
        <div>
            filter: <input onChange={onChange} />
        </div>
    )
}

const PersonForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                name: <input onChange={props.onChangeName} required />
            </div>
            <div>
                phone number: <input onChange={props.onChangeNumber} required />
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}

const Persons = ({ filteredPersons }) => {
    return (
        <>
            {
                filteredPersons.map(person =>
                    <div key={person.name}>{person.name} {person.number}</div>)
            }
        </>
    )
}

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilterValue] = useState('')
    const [filteredPersons, setFilteredPersons] = useState(persons)

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
                setFilteredPersons(persons)
            })
    }, [])

    const onChangeName = (event) => {
        setNewName(event.target.value)
    }
    const onChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const getNewNameNumber = (event) => {
        event.preventDefault()
        const namesInArray = persons.map(person => person.name)
        if (namesInArray.includes(newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const copy = [...persons, { name: newName, number: newNumber }]
        setPersons(copy)
        setFilteredPersons(copy)
    }

    const filterList = (event) => {

        setFilterValue(event.target.value)

        if (filter.length === 0) {
            setFilteredPersons(persons)
        }

        const filteredList = (person) => {
            return person.name.toLowerCase().includes(filter.toLowerCase())
        }

        const filteredArray = persons.filter(filteredList)

        setFilteredPersons(filteredArray)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onChange={filterList} />
            <h2>Add new</h2>
            <PersonForm onSubmit={getNewNameNumber} onChangeName={onChangeName} onChangeNumber={onChangeNumber} />
            <h2>Numbers</h2>
            <Persons filteredPersons={filteredPersons} />
        </div>
    )
}

export default App