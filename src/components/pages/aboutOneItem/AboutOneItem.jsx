import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import Item from "../../item/Item";
import Button from "../../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../../../store/Cart/cartAction";
import {addToStars} from "../../../store/Favourites/favouriteAction";

const AboutOneItem = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cartReducer, favouriteReducer, itemReducer } = useSelector(state => state )
  const { cart } = cartReducer
  const { stars } = favouriteReducer
  const { items } = itemReducer
  const [element, setElement] = useState([])

  useEffect(() =>{
      items.forEach(el => {
        const parsedElement = JSON.parse(el)
        if (parsedElement.id === Number(id)){
          setElement(el)
        }
      })
  },[])

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  const onAdd = (item) => dispatch(addToBasket(item))
  const addFav = (item) => dispatch(addToStars(item))

  return (
    <>
      <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
      <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      { element.length > 0 && (
        <Item
          id={id}
          key={id}
          item={element}
          onAdd={onAdd}
          addFav={addFav}
          stars={stars}
          cart={cart}
        />
      )}
    </>
  );
};

export default AboutOneItem;