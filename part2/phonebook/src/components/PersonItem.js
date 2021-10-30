import React from 'react';

const PersonItem = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  );
};

export default PersonItem;
