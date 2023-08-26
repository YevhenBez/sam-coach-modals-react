import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';

import css from './css/modal.module.css';

const modalRoot = document.querySelector('#modalRoot');

const Modal = ({ onClose }) => {

    useEffect(() => {
    const keyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const onOverlayClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

    return createPortal(
    <div onClick={onOverlayClose} className={css.overlay}>
      <div className={css.modal}>
        <form className={css.formStyle} >
      <label className={css.labelStyle}>
        Name
        <input
          className={css.inputName}
          type="text"
          
        />
      </label>
      <label className={css.labelStyle}>
        Email
        <input
          className={css.inputName}
          type="email"
        />
      </label>
      <button type="submit" className={css.btnAdd}>
        Add contact
      </button>
    </form>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;