import React, { useState } from 'react';
import Search from './components/Search';
import Form from './components/Form';
import PersonsList from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 },
  ]);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    if (!persons.some((person) => person.name === newName)) {
      const personObject = {
        name: newName,
        phone: newPhoneNumber,
      };

      setPersons(persons.concat(personObject));
      setNewName('');
      setNewPhoneNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
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

  const searchedPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchFilter.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
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
      <PersonsList persons={searchedPersons} />
    </div>
  );
};

export default App;
