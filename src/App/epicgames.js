import React, { useState, useEffect } from "react";
import Data from "./data";

export default function Epicgames() {
  const [data, setData] = useState(Data);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '8537977f5emshc7003a883625c36p10ccb2jsn600cd7921797',
				'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
			}
		};
		
		fetch('https://free-epic-games.p.rapidapi.com/free', options)
			.then(response => response.json())
			.then(response => setData(response))
			.catch(err => console.error(err));
	}, []);

	function offerType(item) {
		if (item[1].offerType === "DLC") {
		return "DLC";
		}
		return "BaseGame";
	}

	function contents(filData) {
		const ArrayfilData = Object.entries(filData);
		const games = ArrayfilData.map(function (item) {
			return (
				<div className="content" key={item[1].id}>
				<div className="content-data">
					<div className="content-header">
					<p className="title">{item[1].title}</p>
					<p className="seller">{item[1].seller.name}</p>
					</div>
					<p className="description">{item[1].description}</p>
					<div className="content-footer">
					<p className="price">
						Rs {item[1].price.totalPrice.originalPrice}
					</p>
					<p className="offerType">{offerType(item)}</p>
					</div>
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
				<p className="game-section">Free Games</p>
				{contents(data.freeGames.current)}
			</div>
			<hr></hr>
			<div className="game-data">
				<p className="game-section">Upcoming Free Games</p>
				{contents(data.freeGames.upcoming)}
			</div>
			</div>
		</div>
		</div>
	);
}
