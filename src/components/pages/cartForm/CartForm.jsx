import React from 'react';
import CartFormContainer from "./CartFormContainer";
import {useNavigate} from "react-router-dom";
import Button from "../../button/Button";
import './cartForm.scss'
import {useSelector} from "react-redux";

const CartForm = () => {
  const { cart } = useSelector( state => state.cartReducer)
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  return (
    <>
      <h1 className="store-items__title">CART FORM</h1>
        <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
        <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      { cart.length > 0 ?
        <div className="form">
          <div className="form-wrapper">
            <CartFormContainer />
          </div>
        </div>
        : <p>Sorry, your cart is empty</p>
      }
    </>
  );
};

export default CartForm;