import React from 'react';
import PersonItem from './PersonItem';

const PersonsList = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <PersonItem key={person.id} name={person.name} number={person.phone} />
      ))}
    </ul>
  );
};

export default PersonsList;
