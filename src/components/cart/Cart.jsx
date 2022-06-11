import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from "../modal/Modal";
import './cart.scss'
import Button from "../button/Button";

const Cart = (props) => {
  const [active, setActive] = useState(false)
  const { name, text, price, image, color } = props.itemInfo
  const { itemInfo, stars, addFav, onAdd} = props

  const changeActive = () => setActive(!active)

  const onAddInfo = () => {
    changeActive()
    onAdd(itemInfo)
  }

  return (
    <li className="card" style={{background: color}}>
      <img src={image} alt="image" className="card__img"/>
      <div className="card__content">
        <h3 className="card__title"><span>{name}</span> by Artist</h3>
        <img className="card__rates" src="./img/rating.png" alt="rates"/>
        <p className="card__text">{text}</p>
        <div className="card__description">
          <span className="card__description-price">${price}</span>
          <Button styles="card__description-btn" text="ADD TO CART" handlerClick={changeActive}/>
        </div>
      </div>
      {stars.includes(itemInfo.id.toString()) ?
        <img data-id={itemInfo.id} onClick={addFav} src="./img/star-after.svg" alt="star-before" className="card__favorite"/> :
        <img data-id={itemInfo.id} onClick={addFav} src="./img/star-before.svg" alt="star-after" className="card__favorite"/>
      }

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

Cart.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  color: PropTypes.string
}

Cart.defaultProps = {
  name: 'Error',
  text: '...',
  price: 0,
}

export default Cart;