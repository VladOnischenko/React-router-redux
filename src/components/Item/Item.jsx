import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from "../modal/Modal";
import './item.scss'
import Button from "../button/Button";
import {Link} from "react-router-dom";

const Item = (props) => {
  const [active, setActive] = useState(false)
  const { name, text, price, image, color } = props.item
  const { id, item, stars, addFav, onAdd, deleteIcon} = props

  const changeActive = () => setActive(!active)

  const onAddInfo = () => {
    changeActive()
    onAdd(item)
  }

  return (
    <li className="item" style={{background: color}}>
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
          {onAdd && (<Button styles="item__description-btn" text="ADD TO CART" handlerClick={changeActive}/>)}
        </div>
      </div>
      {stars.includes(item.id) ?
        <img data-id={item.id} onClick={addFav} src="../img/star-after.svg" alt="star-before" className="item__favorite"/> :
        <img data-id={item.id} onClick={addFav} src="../img/star-before.svg" alt="star-after" className="item__favorite"/>
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