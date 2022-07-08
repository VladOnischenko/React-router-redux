import React, {useState} from 'react';
import './layout.scss'
import InterectiveIcon from "../interectiveIcon/InterectiveIcon";
import {IoIosHome} from "react-icons/io";

import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Layout = () => {
  const { cartReducer, favouriteReducer } = useSelector(state => state)
  const [cartOpen, setCartOpen] = useState(false)
  const [favorites, setFavorites] = useState(false)

  const changeCartOpen = () => setCartOpen(!cartOpen)
  const changeFavorites = () => setFavorites(!favorites)

  return (
    <>
        <header className="header">
          <NavLink to="/" className="icon-wrapper"><IoIosHome className="home-icon"/></NavLink>
          <NavLink to="/favourites" className="icon-wrapper"><InterectiveIcon image="./img/star-after.svg" num={favouriteReducer.stars.length} action={changeFavorites}/></NavLink>
          <NavLink to="/cart" className="icon-wrapper"><InterectiveIcon image="./img/basket.svg" num={cartReducer.cart.length} action={changeCartOpen}/></NavLink>
        </header>

      <div className="store-items">
        <Outlet />
      </div>

    </>
  );
}


export default Layout;

// {favorites && (
//   <div className="shop-favorites">
//     {stars.map( el => <Orders key={el.id} item={el}/>)}
//   </div>
// )}

// {cartOpen && (
//   <div className="shop-item">
//     {orders.map( el => <Orders key={el.id} item={el}/>)}
//   </div>
// )}