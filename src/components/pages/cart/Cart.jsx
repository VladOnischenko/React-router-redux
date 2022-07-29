import React, {useContext} from 'react';
import './cart.scss'
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";
import Item from "../../item/Item";
import { BsFillCartXFill } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../../../store/Cart/cartAction";
import {addToStars} from "../../../store/Favourites/favouriteAction";
import {ListStyle} from "../../layout/Layout";

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartReducer, favouriteReducer } = useSelector(state => state)
  const { cart } = cartReducer
  const { stars } = favouriteReducer

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})
  const cartFormPage = () => navigate('/cartForm', {replace: true})

  const onAdd = (item) => dispatch(addToBasket(item))
  const addFav = (item) => dispatch(addToStars(item))

  const changeStyle = useContext(ListStyle)

  return (
    <>
      <h2 className="store-items__title">YOUR CART</h2>
      <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
      <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      { cart.length > 0 && <Button styles="buy-btn" handlerClick={cartFormPage} text="Buy"/>}
      <div className={changeStyle ? "carts-wrapper" : "carts-list"}>
        { cart.length <= 0
          ? <p>Your cart is empty</p>
          : cart.map( item => {
            const keyId = JSON.parse(item).id
            return (<Item
              key={keyId}
              id={keyId}
              deleteIcon={<BsFillCartXFill/>}
              item={item}
              onAdd={onAdd}
              cart={cart}
              addFav={addFav}
              stars={stars}
            />)
          })
        }
      </div>
    </>
  );
};

export default Cart;