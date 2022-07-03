import React, { useState } from "react";

import "../styles/App.css";
const App = () => {
  const [number, setNumber] = useState(1);

  const LoadNumbers = ({ number }) => {
    let divs = [];
    for (let i = number; i < number + 5; i++) {
      divs.push(i);
    }

    return (
      <>
        {divs.map((d) => {
          return <div>{d}</div>;
        })}
      </>
    );
  };

  return (
    <div id="main">
      <div>{<LoadNumbers number={number} />}</div>
      <button
        id="back-button"
        onClick={() => setNumber(number - 5)}
        disabled={number == 1 ? true : false}
      >
        Prev Page
      </button>
      <button id="next-button" onClick={() => setNumber(number + 5)}>
        Next Page
      </button>
    </div>
  );
};

export default App;
