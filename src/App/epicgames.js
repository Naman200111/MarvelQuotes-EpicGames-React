import React from "react";
import Data from "./data";

export default function Epicgames() {
  function contents(filData) {
    const ArrayfilData = Object.entries(filData);
    const games = ArrayfilData.map(function (item) {
      return (
        <div className="content" key={item[1].id}>
          <div className="content-data">
            <p className="title">{item[1].title}</p>
            <p className="validity">{item[1].effectiveDate}</p>
            <p className="description">{item[1].description}</p>
            <p className="price">Rs{item[1].price.totalPrice.originalPrice}</p>
          </div>
          <img
            src={item[1].keyImages[0].url}
            alt="free-game"
            className="game-image"
          ></img>
        </div>
      );
    });
    return games;
  }

  return (
    <div className="epic-games">
      <div className="epic-games--content">
        <div className="free-epic-games">
          <div className="game-data">
            <p className="game-section">Current Free Available Games</p>
            {contents(Data.freeGames.current)}
          </div>
          <hr></hr>
          <div className="game-data">
            <p className="game-section">Upcoming Free Available Games</p>
            {contents(Data.freeGames.upcoming)}
          </div>
        </div>
      </div>
    </div>
  );
}

// title, description, validity date, image, price
