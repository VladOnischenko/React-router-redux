import React from 'react';
import './homePage.scss'
import Item from "../../Item/Item";

const HomePage = (props) => {
  const { onAdd, addFav, stars, basket } = props

  return (
    <div>
      <h2 className="store-items__title">LATEST ARRIVALS IN MUSICA</h2>
      <ul className="cards-wrapper">
        {props.items.map( item =>
            <Item
              id={item.id}
              key={item.id}
              item={item}
              onAdd={onAdd}
              addFav={addFav}
              stars={stars}
              basket={basket}
            />
        )}
      </ul>
    </div>
  );
};

export default HomePage;