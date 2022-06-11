import React from 'react';
import './interectiveIcon.scss'
import PropTypes from 'prop-types';

const InterectiveIcon = (props) => {
  const { image, num, action } = props
  return (
    <button className="icon" onClick={action}>
      <img className="icon__img" src={image} alt="icon" />
      <span className="icon__count">{num}</span>
    </button>
  );
}

InterectiveIcon.propTypes = {
  image: PropTypes.string,
  num: PropTypes.number,
  action: PropTypes.func
}

export default InterectiveIcon;