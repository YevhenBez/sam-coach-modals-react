import React from 'react';

import { createPortal } from 'react-dom';

import css from './css/modal.module.css';

const modalRoot = document.querySelector('#modalRoot');

const Modal = () => {
    return createPortal(
    <div  className={css.overlay}>
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