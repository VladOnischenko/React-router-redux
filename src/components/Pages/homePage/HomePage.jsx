import React from 'react';
import './homePage.scss'
import Item from "../../Item/Item";

const HomePage = (props) => {
  const { onAdd, addFav, stars, basket } = props

  return (
    <div>
      <h2 className="store-items__title">LATEST ARRIVALS IN MUSICA</h2>
      <ul className="cards-wrapper">
        {props.items.map( item => {
          const keyId = JSON.parse(item).id
          return <Item
            key={keyId}
            id={keyId}
            item={item}
            onAdd={onAdd}
            addFav={addFav}
            stars={stars}
            basket={basket}
          />
        })}
      </ul>
    </div>
  );
};

export default HomePage;