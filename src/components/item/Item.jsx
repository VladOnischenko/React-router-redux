import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import Modal from "../modal/Modal";
import './item.scss'
import Button from "../button/Button";
import {Link} from "react-router-dom";
import {ListStyle} from "../layout/Layout";

const Item = (props) => {
  const [active, setActive] = useState(false)
  const { id, item, stars, cart, addFav, onAdd, deleteIcon} = props
  const { name, text, price, image, color } = JSON.parse(item)
  const listStyle = useContext(ListStyle)

  const changeActive = () => setActive(!active)

  const onAddInfo = () => {
    changeActive()
    onAdd(item)
  }
  const addToCart = () => cart.includes(item) ? null : <Button styles="item__description-btn" text="ADD TO CART" handlerClick={changeActive}/>

  return (
    <li className={listStyle ? "item" : "item item-list"} style={{background: color}}>
      <Link to={`/about/${id}`}>
        <div className="item__img">
          <img src={image} alt="image"/>
        </div>
      </Link>
      <div className="item__content">
        <h3 className="item__title"><span>{name}</span> by Artist</h3>
        <img className="item__rates" src="../img/rating.png" alt="rates"/>
        <p className="item__text">{text}</p>
        <div className="item__description">
          <span className="item__description-price">${price}</span>
          {addToCart()}
        </div>
      </div>
      {stars.includes(item) ?
        <img onClick={() => addFav(item)} src="../img/star-after.svg" alt="star-before" className="item__favorite"/> :
        <img onClick={() => addFav(item)} src="../img/star-before.svg" alt="star-after" className="item__favorite"/>
      }
      {deleteIcon && (
        <div className="item__delete" onClick={() => onAdd(item)}>
          {deleteIcon}
        </div>
      )}

      {active && <Modal
        header={name}
        description={text}
        price={price}
        action={onAddInfo}
        active={changeActive}
      />}

    </li>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  color: PropTypes.string
}

Item.defaultProps = {
  name: 'Error',
  text: '...',
  price: 0,
}

export default Item;