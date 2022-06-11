import React from 'react';
import PropTypes from 'prop-types';
import './button.scss'

const Button = (props) => {
  const { text, handlerClick, styles } = props

  return (
    <button onClick={handlerClick} className={styles}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  handlerClick: PropTypes.func,
  styles: PropTypes.string
}

export default Button;