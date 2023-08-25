import { NavLink } from 'react-router-dom';
import MaterialUI from '../../components/MaterialUI';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LoginIcon from '@mui/icons-material/Login';

const AuthMenu = () => {
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
    </>
  );
};

export default AuthMenu;
