import React from 'react';
import './favourites.scss'
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";
import Item from "../../item/Item";
import {addToBasket, addToStars} from "../../../store/actions";
import {useDispatch, useSelector} from "react-redux";

const Favourites = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { card, stars } = useSelector(state => state)

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  const onAdd = (item) => dispatch(addToBasket(item))
  const addFav = (item) => dispatch(addToStars(item))

  return (
    <>
      <h2 className="store-items__title">YOUR FAVOURITES</h2>
      <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
      <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      <div className="cards-wrapper">
        { stars.length <= 0
          ? <p>No favourites</p>
          : stars.map( item => {
            const keyId = JSON.parse(item).id
            return (<Item
              key={keyId}
              id={keyId}
              deleteIcon={null}
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

export default Favourites;