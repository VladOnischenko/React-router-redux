import React, {useEffect} from 'react';
import './style.scss'

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/homePage/HomePage";
import Favourites from "./components/pages/favourites/Favourites";
import Cart from "./components/pages/cart/Cart";
import NotFoundPage from "./components/pages/notFoundPage/NotFoundPage";

import {Routes, Route, Navigate} from 'react-router-dom'
import AboutOneItem from "./components/pages/aboutOneItem/AboutOneItem";
import {useDispatch} from "react-redux";
import {getItems} from "./store/Api/itemAction";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getItems())
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/about/:id" element={<AboutOneItem />}/>
          <Route path="/favourites/" element={<Favourites  />}/>
          <Route path="/favourites/:id" element={<Navigate to="/about/:id" />}/>
          <Route path="/cart/" element={<Cart />}/>
          <Route path="/cart/:id" element={<Navigate to="/about/:id" />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
