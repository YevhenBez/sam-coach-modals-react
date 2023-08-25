import MaterialUI from '../../components/MaterialUI';
import Navigation from '../../components/navigation/Navigation';
import UserMenu from '../../components/userMenu/UserMenu';
import AuthMenu from '../../components/authMenu/AuthMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MaterialUI.AppBar position="static">
      <MaterialUI.Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        <MaterialUI.Toolbar>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </MaterialUI.Toolbar>
      </MaterialUI.Container>
    </MaterialUI.AppBar>
  );
};

export default AppBar;
