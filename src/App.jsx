import React, {useEffect, useState} from 'react';
import './style.scss'

import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/homePage/HomePage";
import Favourites from "./components/Pages/favourites/Favourites";
import Basket from "./components/Pages/basket/Basket";
import NotFoundPage from "./components/Pages/notFoundPage/NotFoundPage";

import {Routes, Route, Navigate} from 'react-router-dom'
import SinglePage from "./components/Pages/singlePage/SinglePage";

const App = () => {
  const [items, setItems] = useState([])
  const [basket, setBasket] = useState(() => {
    const saved = localStorage.getItem('basket')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })
  const [stars, setStars] = useState(() => {
    const saved = localStorage.getItem('stars')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })

  useEffect(() => {
      localStorage.setItem('basket', JSON.stringify(basket))
      localStorage.setItem('stars', JSON.stringify(stars))
  },[basket, stars])
  useEffect(() => {
    fetch('./musica.json')
      .then((response) => response.json())
      .then(data => {
        const test = data.map(item => JSON.stringify(item))
        setItems(test)
      })
  },[])

  const addToBasket = (item) => {
    const allItems = [...basket, item]
    const filteredItems = basket.filter(el => el !== item)

    if(basket.includes(item)) {
      setBasket(filteredItems)
    } else {
      setBasket(allItems)
    }
  }
  const addToStars = (item) => {
    const allFavorite = [...stars, item]
    const filteredFavorite = stars.filter(el => el !== item)

    if (stars.includes(item)) {
      setStars(filteredFavorite)
    } else {
      setStars(allFavorite)
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout orders={basket} stars={stars}/>}>
          <Route index element={<HomePage onAdd={addToBasket} addFav={addToStars} stars={stars} basket={basket} items={items}/>}/>
          <Route path="/about/:id" element={<SinglePage addFav={addToStars} onAdd={addToBasket} items={items} stars={stars} basket={basket}/>}/>
          <Route path="/favourites/" element={<Favourites basket={basket} stars={stars} addFav={addToStars} onAdd={addToBasket}/>}/>
          <Route path="/favourites/:id" element={<Navigate to="/about/:id" />}/>
          <Route path="/basket/" element={<Basket basket={basket} stars={stars} addFav={addToStars} onAdd={addToBasket}/>}/>
          <Route path="/basket/:id" element={<Navigate to="/about/:id" />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
