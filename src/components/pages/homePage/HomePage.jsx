import React from 'react';
import './homePage.scss'
import Item from "../../item/Item";
import {useDispatch, useSelector} from "react-redux";
import LoaderSpinner from "../../loader-spinner/LoaderSpinner";
import {addToBasket} from "../../../store/Cart/cartAction";
import {addToStars} from "../../../store/Favourites/favouriteAction";

const HomePage = () => {
  const { cartReducer, favouriteReducer, itemReducer } = useSelector(state => state)
  const { cart } = cartReducer
  const { stars } = favouriteReducer
  const { items, loading } = itemReducer
  const dispatch = useDispatch()

  const onAdd = (item) => dispatch(addToBasket(item))
  const addFav = (item) => dispatch(addToStars(item))

  return (
    <div>
      <h2 className="store-items__title">LATEST ARRIVALS IN MUSICA</h2>
      <ul className="carts-wrapper">
        { !loading ?  items.map( item => {
          const keyId = JSON.parse(item).id
          return <Item
            key={keyId}
            id={keyId}
            item={item}
            onAdd={onAdd}
            addFav={addFav}
            stars={stars}
            cart={cart}
          />
        }) : <LoaderSpinner />}
      </ul>
    </div>
  );
};

export default HomePage;