import React from 'react';
import PersonItem from './PersonItem';

const PersonsList = ({ persons, removePerson }) => {
  return (
    <ul>
      {persons.map((person) => (
        <PersonItem
          key={person.id}
          removePerson={removePerson}
          id={person.id}
          name={person.name}
          number={person.number}
        />
      ))}
    </ul>
  );
};

export default PersonsList;
