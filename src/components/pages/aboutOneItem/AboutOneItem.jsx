import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import Item from "../../item/Item";
import Button from "../../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToStars} from "../../../store/actions";

const AboutOneItem = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, card, stars } = useSelector(state => state)
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
          card={card}
        />
      )}
    </>
  );
};

export default AboutOneItem;