import "./App.css";
import React, { useState } from "react";
const Setup = () => {
  const [Text, setText] = useState("Random Text");
  const handleClick = () => {
    if (Text === "Random Text") {
      setText("Nitin Bharat Mharanur");
    } else {
      setText("Random Text");
    }
  };
  return (
    <div className="container">
      <h1>Implimenting the UseState</h1>
      <div className="Trial">
        <h1 className="title">{Text}</h1>
        <button type="button" onClick={handleClick}>
          change Title
        </button>
      </div>
    </div>
  );
};

export default Setup;
