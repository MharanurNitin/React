import React from "react";
import "./index.css";
import Flowers from "./components/flowers";

//obj
const Detail = [
  {
    name: "Rose",
    img: "https://imgs.search.brave.com/O43KxZrbIglWk3FLwVmEDqQ7cqRTLyx7ObXXORdOdJY/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/ck9ObnlaYThNdm5i/b0RveFRBcXlRSGFF/NyZwaWQ9QXBp",
    dec: "A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars.",
  },
  {
    name: "Lotus",
    img: "https://imgs.search.brave.com/1im14Hx0qy5hIwfHHI_Vt0Uw6iopdQc_KTRGGPuEnbE/rs:fit:684:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/UTdieXdJRzFMd2sz/Y3pOSDhNSHpRSGFG/SSZwaWQ9QXBp",
    dec: "Nelumbo nucifera, also known as sacred lotus, Laxmi lotus, Indian lotus, or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae.",
  },
  {
    name: "Merigold",
    img: "https://imgs.search.brave.com/MhMn4EXS7qSXYabDFdQiZKo7gNsMg3h28XDCv7l5Xvw/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/aEpXU2syZEYxQnND/NjliWWFCcWx3SGFF/OCZwaWQ9QXBp",
    dec: "The bright and vibrant marigold is the birth month flower of October, which is known for its beauty and multiple medicinal benefits. ",
  },
];

const App = () => {
  return (
    <>
      <h1>About Flowers</h1>
      <div className="container">
        <Flowers
          img={Detail[0].img}
          name={Detail[0].name}
          dec={Detail[0].dec}
        />
        <Flowers
          img={Detail[1].img}
          name={Detail[1].name}
          dec={Detail[1].dec}
        />
        <Flowers
          img={Detail[2].img}
          name={Detail[2].name}
          dec={Detail[2].dec}
        />
      </div>
    </>
  );
};
export default App;
