import React, { useState } from 'react';

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  );
};

const Statistics = ({ feedback }) => {
  const total = feedback.good + feedback.neutral + feedback.bad;
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={feedback.good} />
          <StatisticLine text="neutral" value={feedback.neutral} />
          <StatisticLine text="bad" value={feedback.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine
            text="average"
            value={(feedback.good - feedback.bad) / total}
          />
          <StatisticLine
            text="positive"
            value={(feedback.good / total) * 100}
          />
        </tbody>
      </table>
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
      <Button text="good" handler={() => setGood(good + 1)} />
      <Button text="neutral" handler={() => setNeutral(neutral + 1)} />
      <Button text="bad" handler={() => setBad(bad + 1)} />
      {good || neutral || bad ? (
        <Statistics feedback={{ good, neutral, bad }} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
