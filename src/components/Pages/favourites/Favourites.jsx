import React from 'react';
import './favourites.scss'
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";
import Item from "../../Item/Item";

const Favourites = (props) => {
  const navigate = useNavigate()
  const { addFav, onAdd, stars, basket} = props

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

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

export default Favourites;