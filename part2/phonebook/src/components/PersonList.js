import React from 'react';
import PersonItem from './PersonItem';

const PersonsList = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <PersonItem key={person.id} name={person.name} number={person.number} />
      ))}
    </ul>
  );
};

export default PersonsList;
