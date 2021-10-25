import React, { useState } from 'react';

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>good 6</p>
      <p>neutral 2</p>
      <p>bad 1</p>
      <p>all 9</p>
      <p>average 0.555555</p>
      <p>positive 66.66666 %</p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <Statistics />
    </div>
  );
};

export default App;
