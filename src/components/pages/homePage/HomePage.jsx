import React, {useContext, useEffect} from 'react';
import './homePage.scss'
import Item from "../../item/Item";
import {useDispatch, useSelector} from "react-redux";
import LoaderSpinner from "../../loader-spinner/LoaderSpinner";
import {addToBasket} from "../../../store/Cart/cartAction";
import {addToStars} from "../../../store/Favourites/favouriteAction";
import {spinnerOFF, spinnerON} from "../../../store/LoaderSpinner/spinnerAction";
import {ListStyle} from "../../layout/Layout";

const HomePage = () => {
  const { cartReducer, favouriteReducer, itemReducer, spinnerReducer } = useSelector(state => state)
  const { cart } = cartReducer
  const { stars } = favouriteReducer
  const { items } = itemReducer
  const { loading } = spinnerReducer
  const dispatch = useDispatch()

  const changeStyle = useContext(ListStyle)

  const onAdd = (item) => dispatch(addToBasket(item))
  const addFav = (item) => dispatch(addToStars(item))

  useEffect(() => {
    dispatch(spinnerON())
    setTimeout(() =>{
      dispatch(spinnerOFF())
    },2000)
  },[])

  return (
    <div>
      <h2 className="store-items__title">LATEST ARRIVALS IN MUSICA</h2>
      <ul className={changeStyle ? "carts-wrapper" : "carts-list"}>
        { loading ? items.map( item => {
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