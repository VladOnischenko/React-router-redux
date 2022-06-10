import React, {Component} from 'react';
import './orders.scss'
import PropTypes from 'prop-types';

class Orders extends Component {
  render() {
    const {image, price, name } = this.props.item
    return (
      <div className="item">
          <img src={image} alt="image" className="item__img"/>
          <h3 className="item__title"><span>{name}</span></h3>
          <span className="item__description-price">${price}</span>
      </div>
    );
  }
}

Orders.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string
}

export default Orders;