import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Series from "./obj";

const root = ReactDom.createRoot(document.getElementById("root"));

const Card = (props) => {
  const { img, link, sname, title } = props;
  return (
    <div className="card">
      <img src={img} alt="myPic" className="card__img" />
      <div className="card__info">
        <span className="card__category">{title}</span>
        <h1 className="card__title">{sname}</h1>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
};

root.render(
  <>
    <h1 className="top_heading">Top 5 Netflix series</h1>
    <div className="cards">
      {Series.map((series) => {
        return <Card series={series} />;
      })}
    </div>
  </>
);
