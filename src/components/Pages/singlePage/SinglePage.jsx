import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom'
import Item from "../../Item/Item";
import Button from "../../button/Button";

const SinglePage = (props) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [element, setElement] = useState([])
  const {  onAdd, addFav, items, stars } = props

  useEffect(() =>{
      items.forEach(el => {
        if (el.id === Number(id)){
          setElement(el)
        }
      })
  },[id])

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  return (
    <>
      <Button styles="goBack-btn" handlerClick={goBack} text="Go Back"/>
      <Button styles="goHome-btn" handlerClick={goHome} text="Go Home"/>
      { element && (
        <Item
          id={Number(id)}
          key={Number(id)}
          item={element}
          onAdd={onAdd}
          addFav={addFav}
          stars={stars}
        />
      )}
    </>
  );
};

export default SinglePage;