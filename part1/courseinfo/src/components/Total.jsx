import React from 'react';

const Total = ({ total }) => {
  return (
    <p>
      Number of exercises &nbsp;
      {total.reduce((acc, value) => {
        return (acc += value.exercises);
      }, 0)}
    </p>
  );
};

export default Total;
