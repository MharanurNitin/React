import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Booklist = () => {
  return (
    <section className="container">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <Img className="img" />
      <Title />
      <Desc />
    </article>
  );
};
const Img = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
      alt="book"
    />
  );
};
const Title = () => {
  return <h3>I Love You to the Moon and Back</h3>;
};
const Desc = () => {
  return <h5>William W Li MD</h5>;
};
ReactDom.render(<Booklist />, document.getElementById("root"));
