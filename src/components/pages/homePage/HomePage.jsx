import React from 'react';
import './homePage.scss'
import Item from "../../item/Item";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToStars} from "../../../store/actions";

const HomePage = () => {
  const { items, card, stars } = useSelector(state => state)
  const dispatch = useDispatch()

  const onAdd = (item) => dispatch(addToBasket(item))
  const addFav = (item) => dispatch(addToStars(item))

  return (
    <div>
      <h2 className="store-items__title">LATEST ARRIVALS IN MUSICA</h2>
      <ul className="cards-wrapper">
        {items.map( item => {
          const keyId = JSON.parse(item).id
          return <Item
            key={keyId}
            id={keyId}
            item={item}
            onAdd={onAdd}
            addFav={addFav}
            stars={stars}
            card={card}
          />
        })}
      </ul>
    </div>
  );
};

export default HomePage;