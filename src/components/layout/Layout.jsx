import React, {createContext, useState} from 'react';
import './layout.scss'
import InterectiveIcon from "../interectiveIcon/InterectiveIcon";
import {IoIosHome} from "react-icons/io";

import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {FaCompressArrowsAlt} from "react-icons/fa";

export const ListStyle = createContext()

const Layout = () => {
  const { cartReducer, favouriteReducer } = useSelector(state => state)
  const [cartOpen, setCartOpen] = useState(false)
  const [favorites, setFavorites] = useState(false)

  const [changeList, setChangeList] = useState(true)
  const toggleListStyle = () => setChangeList(!changeList)

  const changeCartOpen = () => setCartOpen(!cartOpen)
  const changeFavorites = () => setFavorites(!favorites)

  return (
    <>
      <ListStyle.Provider value={changeList} >
        <header className="header">
          <NavLink to="/" className="icon-wrapper"><IoIosHome className="home-icon"/></NavLink>
          <NavLink to="/favourites" className="icon-wrapper"><InterectiveIcon image="./img/star-after.svg" num={favouriteReducer.stars.length} action={changeFavorites}/></NavLink>
          <NavLink to="/cart" className="icon-wrapper"><InterectiveIcon image="./img/basket.svg" num={cartReducer.cart.length} action={changeCartOpen}/></NavLink>
          <button onClick={toggleListStyle}><FaCompressArrowsAlt style={{fontSize: "25px"}}/></button>
        </header>

      <div className="store-items">
        <Outlet />
      </div>
      </ListStyle.Provider>
    </>
  );
}


export default Layout;