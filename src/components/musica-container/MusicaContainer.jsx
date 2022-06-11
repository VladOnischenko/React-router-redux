import React, {useEffect, useState} from 'react';
import './musicaContainer.scss'
import Cart from "../cart/Cart";
import PropTypes from 'prop-types';

const MusicaContainer = (props) => {
  const { title, onAdd, addFav, stars } = props
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('./musica.json')
      .then((response) => response.json())
      .then(data => {
        setItems(data)
      })
  },[])

  return (
    <>
      <h2 className="store-items__title">{title}</h2>
      <ul className="cards-wrapper">
        {items.map( item =>
          <Cart
            key={item.id}
            itemInfo={item}
            onAdd={onAdd}
            addFav={addFav}
            stars={stars}
          />
        )}
      </ul>
    </>
  );
}

MusicaContainer.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  addFav: PropTypes.func
}

MusicaContainer.propDefault = {
  title: 'Some title'
}

export default MusicaContainer;