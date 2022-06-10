import React, {Component} from 'react';
import './musicaContainer.scss'
import Cart from "../cart/Cart";
import PropTypes from 'prop-types';

class MusicaContainer extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
     fetch('./musica.json')
      .then((response) => response.json())
       .then(data => {
         this.setState({ items: data})
       })
  }

  render() {
    const { title, onAdd, addFav, stars } = this.props
    return (
      <>
        <h2 className="store-items__title">{title}</h2>
        <ul className="cards-wrapper">
          {this.state.items.map( item =>
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