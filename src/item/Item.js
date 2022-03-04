import React from "react";
import "./Item.css";
import item from "../assets/item.png";

function Item({ name }) {
  return (
    <div className="item">
      <div className="item__container">
        <div className="item__img">
          <img src={item} alt={item} />
        </div>
        <div className="item__infos">
          <h5>{name}</h5>
          <div className="item__infos-description">
            <h6>125 g - 22.64 € le kg</h6>
            <h6>4,9/5 ⭐️ (8)</h6>
          </div>
          <p>
            Ce cube de banane ravira petits et grands pour une pause saine et
            gourmande. C’est la version anti-gaspi de la banane fraiche car
            élaboré à partir de fruits refusés. De plus, -75% de CO2 sont émis
            par rapport au bananes fraiches (notamment au niveau du transport
            !).
          </p>
          <p>En savoir plus...</p>
        </div>
        <div className="item__cta">
          <h3>3.68€</h3>
          <button>AJOUTER</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
