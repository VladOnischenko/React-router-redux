import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import Item from "../../Item/Item";
import Button from "../../button/Button";

const SinglePage = (props) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [element, setElement] = useState([])
  const { onAdd, addFav, items, stars, basket} = props

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
          basket={basket}
        />
      )}
    </>
  );
};

export default SinglePage;