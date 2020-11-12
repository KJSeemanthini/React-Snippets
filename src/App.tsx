import React, { useState } from "react";
import { Icon, initializeIcons } from "office-ui-fabric-react";

import "./styles.css";
initializeIcons();

export default function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setdisabled] = useState(false);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter) {
      setCounter(counter - 1);
    } else {
      setdisabled(true);
    }
  };

  return (
    <div className="Tile">
      <Icon
        className={"Tile__subtract " + (disabled ? "disabled" : "")}
        iconName="CalculatorSubtract"
        title={"Decrement Count"}
        onClick={decrementCounter}
        style={{
          color: "#ec4444",
          fontWeight: "bold",
          fontSize: "19px",
          height: "20px",
          padding: "3px"
        }}
      />

      <div className="Tile__body">{counter}</div>

      <Icon
        className="Tile__add"
        iconName="Add"
        title={"Increment count"}
        onClick={incrementCounter}
        style={{
          color: "rgba(74, 172, 28, 0.925)",
          height: "20px",
          fontWeight: "bold",
          fontSize: "19px",
          padding: "3px"
        }}
      />
    </div>
  );
}
