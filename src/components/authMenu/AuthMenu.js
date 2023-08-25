import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MaterialUI from '../../components/MaterialUI';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LoginIcon from '@mui/icons-material/Login';
import Modal from '../../components/modal/Modal';

const AuthMenu = () => {

  const [shownModal, setShownModal] = useState(false);

  const closeModal = () => {
    setShownModal(false);
  };

  return (
    <>
      <NavLink to="/register">
        <MaterialUI.Button
          startIcon={<VpnKeyIcon />}
          sx={{ color: 'white' }}
          variant="outlined"
        >
          Register
        </MaterialUI.Button>
      </NavLink>

      <NavLink to="/login">
        <MaterialUI.Button
          startIcon={<LoginIcon />}
          sx={{ color: 'white' }}
          variant="outlined"
        >
          LogIn
        </MaterialUI.Button>
      </NavLink>
      <button type="button" >
        Модалка ОТКРОЙСЯ
      </button>
      {shownModal && <Modal onClose={closeModal} />}
    </>
  );
};

export default AuthMenu;
