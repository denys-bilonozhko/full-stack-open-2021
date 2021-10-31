import React from 'react';

const PersonItem = ({ id, name, number, removePerson }) => {
  return (
    <li>
      {name} {number} <button onClick={() => removePerson(id)}>delete</button>
    </li>
  );
};

export default PersonItem;
