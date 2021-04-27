import React, { useState, useEffect } from "react";
import "./styles.css";
import TestComponent from "./TestComponent";

export default function App() {
  const [testComponentDisplayed, setTestComponentDisplayed] = useState(false);
  const [buttonClicks, setButtonClicks] = useState(0);

  useEffect(() => {
    console.log("page load");
  }, []);

  const obj1 = {
    name: "Jack",
    age: 20,
    sex: "M",
    employed: true,
    wife: { name: "Jill", age: 19, sex: "F", employed: false }
  };

  const propsToString = (obj) => {
    let txt = "";
    const keys = Object.keys(obj);
    for (let keyIdx = 0; keyIdx < keys.length; keyIdx++) {
      if (keyIdx) txt += ", ";
      txt += keys[keyIdx] + ": ";
      const val = obj[keys[keyIdx]];
      if (typeof val !== "object") txt += val;
      else {
        txt += "{" + propsToString(val) + "}";
      }
    }
    alert(txt);
    return txt;
  };

  return (
    <div className="App">
      <h1>React Coding Test</h1>

      <div>
        <ul>
          <li>Follow the instructions below to complete the test.</li>
          <li>Make the app work as instructed.</li>
          <li>Demonstrate good coding techniques.</li>
          <li>
            Fix any errors and warnings, including highlighted syntax warnings.
          </li>
          <li>Feel free to ask questions.</li>
          <li>Take your time - this is not a speed test.</li>
        </ul>
      </div>

      <div>
        <h2>Question 1</h2>
        <ul>
          <li>Add a function that executes when the page loads.</li>
          <li>
            Make sure the function executes only once on initial page load (not
            on each render).
          </li>
        </ul>
      </div>

      <div>
        <h2>Question 2.</h2>
        <div>Update the button below.</div>
        <ul>
          <li>Make the button text red.</li>
          <li>Make the text a softer shade of red.</li>
          <li>Make the button disappear after 3 clicks.</li>
          <li>Make the button re-appear after 3 seconds.</li>
        </ul>
        <button
          style={{
            color: "#FF0000",
            visibility: buttonClicks < 3 ? "visible" : "hidden"
          }}
          onClick={() => {
            setButtonClicks(buttonClicks + 1);
            setTimeout(() => setButtonClicks(0), 3000);
          }}
        >
          Click Me
        </button>
      </div>

      <div>
        <h2>Question 3.</h2>
        <div>
          Write the properties of the object vriable obj1 show in the text box
          below when you click the button.
        </div>
        <ul>
          <input id="txtObjProps" />
        </ul>
        <button
          onClick={(e) => {
            document.getElementById("txtObjProps").value = propsToString(obj1);
          }}
        >
          Click Me
        </button>
      </div>

      <div ClassName="Question1">
        <h2>Question 4.</h2>
        <ul>
          <li>
            Display the TestComponent below the button, but only after the
            button is pressed.
          </li>
        </ul>
        <button onClick={() => setTestComponentDisplayed(true)}>
          Click Me
        </button>
        <TestComponent displayed={testComponentDisplayed} />
      </div>
    </div>
  );
}
