import React from 'react';
import './homePage.scss'
import Item from "../../Item/Item";

const HomePage = (props) => {
  const { onAdd, addFav, stars } = props

  return (
    <div>
      <div className="cards-wrapper">
        {props.items.map( item =>
            <Item
              id={item.id.toString()}
              key={item.id}
              itemInfo={item}
              onAdd={onAdd}
              addFav={addFav}
              stars={stars}
            />
        )}
      </div>
    </div>
  );
};

export default HomePage;