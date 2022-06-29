import React from 'react';
import './card.scss'
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";
import Item from "../../item/Item";
import { BsFillCartXFill } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToStars} from "../../../store/actions";

const Card = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { card, stars } = useSelector(state => state)

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
        { card.length <= 0
          ? <p>Your cart is empty</p>
          : card.map( item => {
            const keyId = JSON.parse(item).id
            return (<Item
              key={keyId}
              id={keyId}
              deleteIcon={<BsFillCartXFill/>}
              item={item}
              onAdd={onAdd}
              card={card}
              addFav={addFav}
              stars={stars}
            />)
          })
        }
      </div>
    </>
  );
};

export default Card;