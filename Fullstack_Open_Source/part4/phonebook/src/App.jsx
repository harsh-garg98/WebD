import Notification from "./components/Notification";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contactServices from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    contactServices
      .getAll()
      .then((initialContacts) => setPersons(initialContacts));
  }, []);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkDuplicate = persons.some((person) => person.name === newName);

    if (checkDuplicate) {
      if (
        window.confirm(
          `${newName} is already in the phonebook. Do you want to replace the phone number?`
        )
      ) {
        const duplicateContactId = persons.filter((n) => n.name === newName)[0]
          .id;
        const updatedContact = {
          // id: duplicateContactId,
          name: newName,
          number: newNumber,
        };

        contactServices
          .update(duplicateContactId, updatedContact)
          .then((returnedContact) => {
            setNewName("");
            setNewNumber("");
            setPersons(
              persons.map((p) =>
                p.id !== duplicateContactId ? p : returnedContact
              )
            );
            setMessage(
              `${returnedContact.name}'s phone number has been updated`
            );
            setTimeout(() => setMessage(null), 5000);
          });
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };
      contactServices
        .create(nameObject)
        .then((returnedContact) => {
          setPersons(persons.concat(returnedContact));
          setNewName("");
          setNewNumber("");
          setMessage(`${returnedContact.name} has been added to phonebook`);
          setTimeout(() => setMessage(null), 5000);
        })
        .catch((error) => {
          console.log(error.response.data.error);
          window.alert(`Error: ${error.response.data.error}`);
        });
    }
  };

  const handleDelete = (id) => {
    const selectedContact = persons.filter((n) => n.id === id)[0].name;

    if (window.confirm(`Do you really want to delete ${selectedContact}?`)) {
      contactServices
        .drop(id)
        .then((response) => {
          setPersons(persons.filter((n) => n.id !== id));
          setMessage(`${selectedContact}'s phone number has been deleted`);
          setTimeout(() => setMessage(null), 5000);
        })
        .catch((error) => {
          setMessage(`${selectedContact} has already been deleted`);
          setTimeout(() => setMessage(null), 5000);
          contactServices
            .getAll()
            .then((receivedContacts) => setPersons(receivedContacts));
        });
    } else {
      window.alert(`${selectedContact} was not deleted`);
    }
  };

  const filteredPersons =
    filter.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>

      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
