import React from 'react';
import './basket.scss'
import Button from "../../button/Button";
import {Link, useNavigate} from "react-router-dom";

const Basket = (props) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  return (
    <section className="store-items">
      <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
      <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      <h1>Basket</h1>
    </section>
  );
};

export default Basket;