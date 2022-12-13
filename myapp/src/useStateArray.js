import { data } from "./data";
import "./useStateArray.css";
import React, { useState } from "react";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(
      people.filter((el) => {
        return el.id != id;
      })
    );
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="name" key={id} onClick={() => removeItem(id)}>
            <h2>{name}</h2>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>clear Item</button>
    </>
  );
};
export default UseStateArray;
