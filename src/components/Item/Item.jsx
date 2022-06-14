import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from "../modal/Modal";
import './item.scss'
import Button from "../button/Button";
import {Link} from "react-router-dom";

const Item = (props) => {
  const [active, setActive] = useState(false)
  const { name, text, price, image, color } = props.itemInfo
  const { id, itemInfo, stars, addFav, onAdd} = props

  const changeActive = () => setActive(!active)

  const onAddInfo = () => {
    changeActive()
    onAdd(itemInfo)
  }

  return (
    <div className="item" style={{background: color}}>
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
          <Button styles="item__description-btn" text="ADD TO CART" handlerClick={changeActive}/>
        </div>
      </div>
      {stars.includes(itemInfo.id) ?
        <img data-id={itemInfo.id} onClick={addFav} src="../img/star-after.svg" alt="star-before" className="item__favorite"/> :
        <img data-id={itemInfo.id} onClick={addFav} src="../img/star-before.svg" alt="star-after" className="item__favorite"/>
      }

      {active && <Modal
        header={name}
        description={text}
        price={price}
        action={onAddInfo}
        active={changeActive}
      />}

    </div>
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