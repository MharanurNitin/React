import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

//Setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/41n9-p6-PpL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Reminders of Him: A Novel",
  author: "Colleen Hoover",
};
const Booklist = () => {
  return (
    <section className="container">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};
const Book = (props) => {
  const { img, title, author } = props; //object destructuring.
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt="book" />,<h3>{title}</h3>,<h5>{author}</h5>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
