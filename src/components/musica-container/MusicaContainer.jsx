import React, {useEffect, useState} from 'react';
import './musicaContainer.scss'
import Cart from "../cart/Cart";
import PropTypes from 'prop-types';

import {Route, Routes} from "react-router-dom";
import Favourites from '../Pages/favourites/Favourites'
import Basket from '../Pages/basket/Basket'
import NotFoundPage from '../Pages/notFoundPage/NotFoundPage'
import HomePage from '../Pages/homePage/HomePage'


const MusicaContainer = (props) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('./musica.json')
      .then((response) => response.json())
      .then(data => {
        setItems(data)
      })
  },[])

  return (
    <>
      <section className="store-items">
        <h2 className="store-items__title">{props.title}</h2>

        <Routes>
          <Route path="/" element={<HomePage {...props} items={items}/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </section>
    </>
  );
}

MusicaContainer.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  addFav: PropTypes.func
}

MusicaContainer.propDefault = {
  title: 'Some title'
}

export default MusicaContainer;