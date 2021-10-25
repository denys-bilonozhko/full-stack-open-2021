import React, { useState } from 'react';

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={'6'} />
      <StatisticLine text="neutral" value={'2'} />
      <StatisticLine text="bad" value={'1'} />
      <StatisticLine text="all" value={'9'} />
      <StatisticLine text="average" value={'0.555555'} />
      <StatisticLine text="positive" value={'66.66666 %'} />
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
      <Button text="good" />
      <Button text="neutral" />
      <Button text="bad" />
      {good || neutral || bad ? <Statistics /> : <p>No feedback given</p>}
    </div>
  );
};

export default App;
