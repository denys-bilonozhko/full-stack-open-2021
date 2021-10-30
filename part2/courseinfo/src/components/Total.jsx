import React from 'react';

const Total = ({ total }) => {
  return (
    <p>
      <b>
        total{' '}
        {total.reduce((acc, value) => {
          return (acc += value.exercises);
        }, 0)}
        {' '}of exercises
      </b>
    </p>
  );
};

export default Total;
