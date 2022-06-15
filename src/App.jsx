import React, {useEffect, useState} from 'react';
import './style.scss'

import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/homePage/HomePage";
import Favourites from "./components/Pages/favourites/Favourites";
import Basket from "./components/Pages/basket/Basket";
import NotFoundPage from "./components/Pages/notFoundPage/NotFoundPage";

import {Routes, Route} from 'react-router-dom'
import SinglePage from "./components/Pages/singlePage/SinglePage";

const App = () => {
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
  const [items, setItems] = useState([])

  useEffect(() => {
      localStorage.setItem('basket', JSON.stringify(basket))
      localStorage.setItem('stars', JSON.stringify(stars))
  },[basket, stars])
  useEffect(() => {
    fetch('./musica.json')
      .then((response) => response.json())
      .then(data => {
        setItems(data)
      })
  },[])

  const addToBasket = (item) => {
    const allItems = [...basket, item]
    const filteredItems = basket.filter(el => el.id !== item.id)

    if(basket.includes(item)) {
      setBasket(filteredItems)
    } else {
      setBasket(allItems)
    }

    // let isInArray = false
    //   basket.forEach(el => {
    //     if (el.id === item.id)
    //       isInArray = true
    //   })
    //     if (!isInArray)
    //       setBasket([...basket, item])
  }
  const addToStars = (event) => {
    const favorites = Number(event.target.dataset.id)
    const allFavorite = [...stars, favorites]
    const filteredFavorite = stars.filter(el => el !== favorites)

    if (stars.includes(favorites)) {
      setStars(filteredFavorite)
    } else {
      setStars(allFavorite)
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout orders={basket} stars={stars}/>}>
          <Route index element={<HomePage onAdd={addToBasket} addFav={addToStars} stars={stars} items={items}/>}/>
          <Route path="/about/:id" element={<SinglePage addFav={addToStars} onAdd={addToBasket} items={items} stars={stars}/>}/>
          <Route path="/favourites" element={<Favourites />}/>
          <Route path="/basket/" element={<Basket basket={basket} stars={stars} addFav={addToStars} onAdd={addToBasket}/>}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
