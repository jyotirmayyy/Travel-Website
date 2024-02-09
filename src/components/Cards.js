import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/80/1a/e4/psx-20170831-233608-largejpg.jpg?w=1200&h=-1&s=1"
              text="Explore the magnificent glorious heritage of Gonds - MADAN MAHAL FORT"
              path="/services"
            />
            <CardItem
              src="https://media-cdn.tripadvisor.com/media/photo-s/02/d9/7f/f2/balancing-rocks.jpg"
              text="Experience a peculiar phenomena - BALANCING ROCK"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
