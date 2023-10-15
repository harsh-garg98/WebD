import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>;

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const Stats = ({ text, stat }) => (
  <tr>
    <td>{text}</td>
    <td>{stat}</td>
  </tr>
);

const Statistics = ({ feedback, buttons, additionalStats }) => {
  if (feedback.good + feedback.neutral + feedback.bad === 0) {
    return "No feedback given";
  }
  return (
    <>
      <Stats text={buttons.button1} stat={feedback.good} />
      <Stats text={buttons.button2} stat={feedback.neutral} />
      <Stats text={buttons.button3} stat={feedback.bad} />
      <Stats
        text={additionalStats.stat1}
        stat={feedback.bad + feedback.good + feedback.neutral}
      />
      <Stats
        text={additionalStats.stat2}
        stat={
          (-feedback.bad + feedback.good) /
          (feedback.bad + feedback.good + feedback.neutral)
        }
      />
      <Stats
        text={additionalStats.stat3}
        stat={
          (feedback.good * 100) /
            (feedback.bad + feedback.good + feedback.neutral) +
          "%"
        }
      />
    </>
  );
};

const App = () => {
  const headings = { heading1: "give feedback", heading2: "statistics" };
  const buttons = { button1: "good", button2: "neutral", button3: "bad" };
  const additionalStats = { stat1: "all", stat2: "average", stat3: "positive" };
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGood = () => {
    const increaseGood = {
      ...feedback,
      good: feedback.good + 1,
    };
    setFeedback(increaseGood);
  };

  const handleNeutral = () => {
    const increaseNeutral = {
      ...feedback,
      neutral: feedback.neutral + 1,
    };
    setFeedback(increaseNeutral);
  };

  const handleBad = () => {
    const increaseBad = {
      ...feedback,
      bad: feedback.bad + 1,
    };
    setFeedback(increaseBad);
  };

  return (
    <div>
      <Heading text={headings.heading1} />
      <Button clickHandler={handleGood} text={buttons.button1} />
      <Button clickHandler={handleNeutral} text={buttons.button2} />
      <Button clickHandler={handleBad} text={buttons.button3} />
      <Heading text={headings.heading2} />
      <Statistics
        feedback={feedback}
        buttons={buttons}
        additionalStats={additionalStats}
      />
    </div>
  );
};

export default App;
