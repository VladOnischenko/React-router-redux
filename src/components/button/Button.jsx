import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './button.scss'

class Button extends Component {
  render() {
    const { text, handlerClick, styles } = this.props
    return (
      <button onClick={handlerClick} className={styles}>{text}</button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  handlerClick: PropTypes.func,
  styles: PropTypes.string
}

export default Button;