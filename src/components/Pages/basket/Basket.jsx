import React from 'react';
import './basket.scss'
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";
import Item from "../../Item/Item";
import { BsFillCartXFill } from "react-icons/bs";

const Basket = (props) => {
  const navigate = useNavigate()
  const { addFav, onAdd, stars, basket} = props

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

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