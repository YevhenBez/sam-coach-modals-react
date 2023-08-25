import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;
