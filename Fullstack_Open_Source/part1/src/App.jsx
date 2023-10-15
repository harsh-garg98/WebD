import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setLeft(left + 1);
    setTotal(total + 1);
    setAll(allClicks.concat("L"));
  };

  const handleRightClick = () => {
    setRight(right + 1);
    setTotal(total + 1);
    setAll(allClicks.concat("R"));
  };

  const handleClearing = () => {
    setLeft(0);
    setRight(0);
    setTotal(total + 1);
    setAll(allClicks.concat("C"));
  };

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return <div>Click some button</div>;
    }
    return (
      <div>
        History of button presses: total {props.total} All clicks{" "}
        {props.allClicks}
      </div>
    );
  };

  return (
    <div>
      <Button handleClick={handleLeftClick} text="Left" />
      <Display counter={left} />
      <Button handleClick={handleRightClick} text="Right" />
      <Display counter={right} />
      <Button handleClick={handleClearing} text="Clear all" />
      <Display counter={allClicks.join(" ")} />
      <p>Total {total}</p>
      <History total={total} allClicks={allClicks.join(" ")} />
    </div>
  );
};

export default App;
