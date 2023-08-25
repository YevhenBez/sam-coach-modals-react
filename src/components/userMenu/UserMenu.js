import MaterialUI from '../../components/MaterialUI';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <MaterialUI.Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <MaterialUI.Box>
          <p>Hello, {user.name} !</p>
          <p>Email: {user.email} </p>
        </MaterialUI.Box>
        <MaterialUI.Button
          startIcon={<LogoutIcon />}
          variant="contained"
          color="error"
          type="button"
          sx={{ height: 'max-content' }}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </MaterialUI.Button>
      </MaterialUI.Box>
    </>
  );
};

export default UserMenu;
