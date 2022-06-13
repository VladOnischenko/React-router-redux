import React, {useState} from 'react';
import './header.scss'
import InterectiveIcon from "../interectiveIcon/InterectiveIcon";
import PropTypes from 'prop-types';
import {IoIosHome} from "react-icons/io";

import {Link} from "react-router-dom";

const Header = (props) => {
  const { orders, stars } = props
  const [cartOpen, setCartOpen] = useState(false)
  const [favorites, setFavorites] = useState(false)

  const changeCartOpen = () => setCartOpen(!cartOpen)
  const changeFavorites = () => setFavorites(!favorites)

  return (
    <>
        <header className="header">
          <Link to="/"><IoIosHome className="home-icon"/></Link>
          <Link to="/favourites"><InterectiveIcon image="./img/star-after.svg" num={stars.length} action={changeFavorites}/></Link>
          <Link to="/basket"><InterectiveIcon image="./img/basket.svg" num={orders.length} action={changeCartOpen}/></Link>
        </header>
    </>
  );
}

Header.propTypes = {
  orders: PropTypes.array.isRequired,
  stars: PropTypes.array.isRequired,
}

export default Header;

// {favorites && (
//   <div className="shop-favorites">
//     {stars.map( el => <Orders key={el.id} item={el}/>)}
//   </div>
// )}

// {cartOpen && (
//   <div className="shop-cart">
//     {orders.map( el => <Orders key={el.id} item={el}/>)}
//   </div>
// )}