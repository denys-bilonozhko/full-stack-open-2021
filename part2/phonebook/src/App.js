import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Form from './components/Form';
import PersonsList from './components/PersonList';
import personsService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personsService.getAll().then((response) => setPersons(response.data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (!persons.some((person) => person.name === newName)) {
      const personObject = {
        name: newName,
        number: newPhoneNumber,
      };

      personsService.create(personObject).then((response) => {
        showNotification({ content: newName, type: 'add' });
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewPhoneNumber('');
      });
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const searchHandler = (event) => {
    setSearchFilter(event.target.value);
  };

  const removePerson = (id, name) => {
    if (window.confirm('Do you really want to delete?')) {
      personsService
        .remove(id)
        .catch((error) => showNotification({ content: name, type: 'error' }));
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const searchedPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchFilter.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Search value={searchFilter} onChange={searchHandler} />
      <h2>add a new</h2>
      <Form
        onSubmit={addPerson}
        nameValue={newName}
        nameHandler={handleNameChange}
        numberValue={newPhoneNumber}
        numberHandler={handlePhoneNumberChange}
      />
      <h2>Numbers</h2>
      <PersonsList persons={searchedPersons} removePerson={removePerson} />
    </div>
  );
};

export default App;
