import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part
          name={part.name}
          exercise={part.exercise}
          key={new Date().getTime() + index}
        />
      ))}
    </div>
  );
};

export default Content;
