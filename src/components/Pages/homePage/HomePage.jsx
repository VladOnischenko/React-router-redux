import React from 'react';
import './homePage.scss'
import Cart from "../../cart/Cart";

const HomePage = (props) => {
  const { title, onAdd, addFav, stars } = props

  return (
    <div>
      <ul className="cards-wrapper">
        {props.items.map( item =>
          <Cart
            key={item.id}
            itemInfo={item}
            onAdd={onAdd}
            addFav={addFav}
            stars={stars}
          />
        )}
      </ul>
    </div>
  );
};

export default HomePage;