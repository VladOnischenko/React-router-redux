import React from 'react';
import CartFormContainer from "./CartFormContainer";
import {useNavigate} from "react-router-dom";
import Button from "../../button/Button";


const CartForm = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  return (
    <>
      <h1>CART FORM</h1>
        <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
        <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      <div className="form">
        <CartFormContainer />
      </div>
    </>
  );
};

export default CartForm;