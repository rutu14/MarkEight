import React, { useState } from "react";
import "./styles.css";

const foodWorld = {
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍇": "Grapes",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

const food = Object.keys(foodWorld);

export default function App() {
  const [plate, setPlate] = useState("");
  const [meaning, setMeaning] = useState("Magic happens here..");

  function changeHandler(event) {
    const inputfood = event.target.value;
    setPlate(inputfood);

    if (inputfood in foodWorld) {
      setMeaning(foodWorld[inputfood]);
    } else {
      setMeaning("Sorry");
    }
  }

  function foodClickHandler(inputfood) {
    setMeaning(foodWorld[inputfood]);
  }

  return (
    <div className="App">
      <h1>Food World</h1>
      <input
        onChange={changeHandler}
        value={plate}
        placeholder={"Place your food here."}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {plate} </h2>
      <h3> {meaning} </h3>
      {food.map((plate) => (
        <span
          onClick={() => foodClickHandler(plate)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {plate}{" "}
        </span>
      ))}
    </div>
  );
}
