import React, {Component} from 'react';
import './header.scss'
import InterectiveIcon from "../interectiveIcon/InterectiveIcon";
import PropTypes from 'prop-types';
import Orders from "../orders-favourites/Orders";

class Header extends Component {
  state = {
    cartOpen: false,
    favorites: false,
  }

  changeCartOpen = () => {
    this.setState({cartOpen: !this.state.cartOpen})
  }

  changeFavorites = () => {
    this.setState({favorites: !this.state.favorites})
  }

  render() {
    const { orders, stars } = this.props
    return (
      <>
        <InterectiveIcon image="./img/star-after.svg" num={stars.length} action={this.changeFavorites}/>
        {this.state.favorites && (
          <div className="shop-favorites">
            {stars.map( el => <Orders key={el.id} item={el}/>)}
          </div>
        )}
        <InterectiveIcon image="./img/basket.svg" num={orders.length} action={this.changeCartOpen}/>
        {this.state.cartOpen && (
          <div className="shop-cart">
            {orders.map( el => <Orders key={el.id} item={el}/>)}
          </div>
        )}
      </>
    );
  }
}

Header.propTypes = {
  orders: PropTypes.array.isRequired,
  stars: PropTypes.array.isRequired,
}

export default Header;