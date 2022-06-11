import React, {useState} from 'react';
import './header.scss'
import InterectiveIcon from "../interectiveIcon/InterectiveIcon";
import PropTypes from 'prop-types';
import Orders from "../orders-favourites/Orders";

const Header = (props) => {
  const { orders, stars } = props
  const [cartOpen, setCartOpen] = useState(false)
  const [favorites, setFavorites] = useState(false)

  const changeCartOpen = () => setCartOpen(!cartOpen)
  const changeFavorites = () => setFavorites(!favorites)

  return (
    <>
      <InterectiveIcon image="./img/star-after.svg" num={stars.length} action={changeFavorites}/>
      {favorites && (
        <div className="shop-favorites">
          {stars.map( el => <Orders key={el.id} item={el}/>)}
        </div>
      )}
      <InterectiveIcon image="./img/basket.svg" num={orders.length} action={changeCartOpen}/>
      {cartOpen && (
        <div className="shop-cart">
          {orders.map( el => <Orders key={el.id} item={el}/>)}
        </div>
      )}
    </>
  );
}

Header.propTypes = {
  orders: PropTypes.array.isRequired,
  stars: PropTypes.array.isRequired,
}

export default Header;