import React from 'react'
import './modal.scss'
import PropTypes from 'prop-types';
import Button from "../button/Button";

const Modal = ({ description, header, action, price, active }) => {
  const handlerModal = () => active ? 'modal active' : 'modal'

  return (
    <div className={handlerModal()} onClick={active}>
      <div className={ active ? "modal__container active" : "modal__container"} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3>{header}</h3>
          <button onClick={active} className="modal__close-btn">&times;</button>
        </div>
        <p className="modal__body">
          {description}
        </p>
        { price && <p>${price}</p> }
        <div className="modal__footer">
          <Button styles="custom-btn green" text="OK" handlerClick={action}/>
          <Button styles="custom-btn red" text="CANCEL" handlerClick={active}/>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  description: PropTypes.string,
  header: PropTypes.string,
  action: PropTypes.func,
}

Modal.defaultProps = {
  description: 'Some text',
  header: 'Modal',
}

export default Modal