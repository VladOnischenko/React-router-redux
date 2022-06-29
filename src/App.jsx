import React, {useEffect} from 'react';
import './style.scss'

import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/homePage/HomePage";
import Favourites from "./components/Pages/favourites/Favourites";
import Basket from "./components/Pages/basket/Basket";
import NotFoundPage from "./components/Pages/notFoundPage/NotFoundPage";

import {Routes, Route, Navigate} from 'react-router-dom'
import SinglePage from "./components/Pages/singlePage/SinglePage";
import {getItems, getStarsFromStorage} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";


const App = () => {
  const dispatch = useDispatch()
  const { stars, basket } = useSelector(state => state)
  console.log('stars 1', stars)
  //TODO -->>>>>>
  // const [basket, setBasket] = useState(() => {
  //   const saved = localStorage.getItem('basket')
  //   const initialValue = JSON.parse(saved)
  //   return initialValue || []
  // })


  // const [stars, setStars] = useState(() => {
  //   const saved = localStorage.getItem('stars')
  //   const initialValue = JSON.parse(saved)
  //   return initialValue || []
  // })


  //TODO -->>>>>>
  // useEffect(() => {
  //     localStorage.setItem('basket', JSON.stringify(basket))
  //     localStorage.setItem('stars', JSON.stringify(stars))
  // },[basket, stars])
  //TODO -->>>>>>

  useEffect(() => {
      dispatch(getItems())
      dispatch(getStarsFromStorage())
  }, [])

  useEffect(() => {
      localStorage.setItem('basket', JSON.stringify(basket))
      localStorage.setItem('stars', JSON.stringify(stars))
  },[basket, stars])


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/about/:id" element={<SinglePage />}/>
          <Route path="/favourites/" element={<Favourites  />}/>
          <Route path="/favourites/:id" element={<Navigate to="/about/:id" />}/>
          <Route path="/basket/" element={<Basket />}/>
          <Route path="/basket/:id" element={<Navigate to="/about/:id" />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
