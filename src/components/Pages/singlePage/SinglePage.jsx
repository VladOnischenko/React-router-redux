import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Item from "../../Item/Item";

const SinglePage = (props) => {
  const {id} = useParams()
  const [element, setElement] = useState([])
  const {onAdd, addFav, items, stars } = props

  useEffect(() =>{
      items.forEach(el => {
        if (el.id === id){
          setElement(el)
        }
      })
  },[id])

  return (

    <>
      <Item
        id={id}
        key={id}
        itemInfo={element}
        onAdd={onAdd}
        addFav={addFav}
        stars={stars}
      />
    </>
  );
};

export default SinglePage;