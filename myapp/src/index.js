import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

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
      <Card
        img=" https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfRWV3DU4RDpY_poy0SDMgj2dNfdvHh-W92WH1fRgyESphp9XiYvZ6VTcWXH0x0A7EnNB8ok6O5NXQDKGHIbvAAngELZEjnxQWClPO2ay-Lwv02fL6iozdir0PeZ7f6dkZ0H.jpg?r=592"
        link="https://www.netflix.com/in/title/80189685"
        sname="The Witcher"
        title="The Netflix origional series"
      />
      <Card
        img="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcspoSNv5eaW6EeKma8WdMgJ-3zPWiC6rJ-sRSA_5nX62QZHYpOArotF1nFj82PEUFz36oTrxDUjUr2mR-jnn-XEN2r3fJrX3PVrXtJCu7FFZTtcfHdYXkjM7t2qv1i_6qTY.jpg?r=111"
        link="https://www.netflix.com/in/title/80997085"
        sname="Narcos: Mexico"
        title="The Netflix origional series"
      />
      <Card
        img="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABchTL1DU6gYTQB_c0n6VXoi9F9GZZE_aXQqkbCTJWMrkn0yHkqTjxFpn_yZv3koybjIkjVSdy9Rbff4m3CppXNQP-8GmEl6lou_383Zq5UUMoUyZvX9rwsvQxIjNtzZW4397.jpg?r=751"
        link="https://www.netflix.com/in/title/81149450"
        sname="Vikings: Valhalla"
        title="A proven climax story"
      />
      <Card
        img="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWWggBa9pykQ8q74ZrJC10BXekWwtB3uZ3vAgPRPBnqirTwWz35QnElObx2hnoeYUOwYA4hmwJnSMqCxWYLEwmIqcoOw9_GPmipQW8Tp53YKZkWB8yf-G17iRwG019oaZpyW.jpg?r=dfa"
        link="https://www.netflix.com/in/title/80232398"
        sname="Bridgerton"
        title="Based on Novel story"
      />
      <Card
        img="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzPR8nR7Bcjz3Vgkn8zYyeOTjb5AtST4PEoxaZkbs_JlYcXyzTaNRwGa6t4UclSGnAtLiWeq7tMKIv5OqyM7dvKZLoah52bMgYuoCdxKVDnGOX7TCxP1TeQvYhwVgP79Lhm.jpg?r=501"
        link="https://www.netflix.com/in/title/80057918"
        sname="Lucifer"
        title="Heroic motion"
      />
    </div>
  </>
);
