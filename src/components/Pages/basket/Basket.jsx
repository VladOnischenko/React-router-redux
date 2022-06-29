import React from 'react';
import './basket.scss'
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";
import Item from "../../Item/Item";
import { BsFillCartXFill } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToStars} from "../../../store/actions";

const Basket = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { basket, stars } = useSelector(state => state)

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  const onAdd = (item) => dispatch(addToBasket(item))
  const addFav = (item) => dispatch(addToStars(item))

  return (
    <>
      <h2 className="store-items__title">YOUR CART</h2>
      <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
      <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      <div className="cards-wrapper">
        { basket.length <= 0
          ? <p>Your cart is empty</p>
          : basket.map( item => {
            const keyId = JSON.parse(item).id
            return (<Item
              key={keyId}
              id={keyId}
              deleteIcon={<BsFillCartXFill/>}
              item={item}
              onAdd={onAdd}
              basket={basket}
              addFav={addFav}
              stars={stars}
            />)
          })
        }
      </div>
    </>
  );
};

export default Basket;