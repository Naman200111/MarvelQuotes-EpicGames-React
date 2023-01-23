import React from "react";

export default function Epicgames() {
  const contents = (
    <div className="content">
      <div className="content-data">
        <p className="title">Epistory - Typing Chronicles</p>
        <p className="validity">2023-01-19</p>
        <p className="description">
          Epistory immerses you in an atmospheric game where you play a girl
          riding a giant fox who fights an insectile corruption from an origami
          world. As you progress and explore this world, the story literally
          unfolds and the mysteries of the magic power of the words are
          revealed.
        </p>
        <p className="price">Rs1499</p>
      </div>
      <img
        src="https://cdn1.epicgames.com/spt-assets/2fe270709f944fc398851454cf476f95/epistory--typing-chronicles-19b5z.png"
        alt="game-image"
        className="game-image"
      ></img>
    </div>
  );

  return (
    <div className="epic-games">
      <div className="epic-games--content">
        <div className="free-epic-games">
          <div className="current">{contents}</div>
          <div className="upcoming"></div>
        </div>
      </div>
    </div>
  );
}

// title, description, validity date, image, price
