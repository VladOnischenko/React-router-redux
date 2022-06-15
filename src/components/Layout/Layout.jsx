import React, {useState} from 'react';
import './layout.scss'
import InterectiveIcon from "../interectiveIcon/InterectiveIcon";
import PropTypes from 'prop-types';
import {IoIosHome} from "react-icons/io";

import {NavLink, Outlet} from "react-router-dom";

const Layout = (props) => {
  const { orders, stars } = props
  const [cartOpen, setCartOpen] = useState(false)
  const [favorites, setFavorites] = useState(false)

  const changeCartOpen = () => setCartOpen(!cartOpen)
  const changeFavorites = () => setFavorites(!favorites)

  return (
    <>
        <header className="header">
          <NavLink to="/" className="icon-wrapper"><IoIosHome className="home-icon"/></NavLink>
          <NavLink to="/favourites" className="icon-wrapper"><InterectiveIcon image="./img/star-after.svg" num={stars.length} action={changeFavorites}/></NavLink>
          <NavLink to="/basket" className="icon-wrapper"><InterectiveIcon image="./img/basket.svg" num={orders.length} action={changeCartOpen}/></NavLink>
        </header>

      <div className="store-items">
        <Outlet />
      </div>

    </>
  );
}

Layout.propTypes = {
  orders: PropTypes.array.isRequired,
  stars: PropTypes.array.isRequired,
}

export default Layout;

// {favorites && (
//   <div className="shop-favorites">
//     {stars.map( el => <Orders key={el.id} item={el}/>)}
//   </div>
// )}

// {cartOpen && (
//   <div className="shop-Item">
//     {orders.map( el => <Orders key={el.id} item={el}/>)}
//   </div>
// )}