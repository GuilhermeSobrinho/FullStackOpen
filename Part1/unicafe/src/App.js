import { useState } from "react";

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return (
     
      <tr>
        <td>{text}</td>
        <td>{(Math.round(value * 100) / 100).toFixed(1)} %</td>
      </tr>
     
    );
  }

  if (text === "average") {
    return (
      <tr>
        <td>{text}</td>
        <td>{(Math.round(value * 100) / 100).toFixed(1)}</td>
      </tr>
    );
  }
  
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutral + clicks.bad;
  const average = (clicks.good * 1 + clicks.bad * -1) / all;
  const positive = (clicks.good * 100) / all;

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={clicks.good} />
          <StatisticsLine text="neutral" value={clicks.neutral} />
          <StatisticsLine text="bad" value={clicks.bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const title = "give feedback";
  const subtitle = "statistics";

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const incGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };

  const incNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };

  const incBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  };

  return (
    <div>
      <Header title={title} />
      <Button handleClick={incGood} text="good" />
      <Button handleClick={incNeutral} text="neutral" />
      <Button handleClick={incBad} text="bad" />
      <Header title={subtitle} />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
