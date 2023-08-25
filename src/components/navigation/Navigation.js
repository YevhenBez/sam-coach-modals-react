import { NavLink } from 'react-router-dom';
import CabinIcon from '@mui/icons-material/Cabin';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import css from '../../components/navigation/css/navigation.module.css';
import MaterialUI from '../../components/MaterialUI';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ul className={css.ul}>
        <li>
          <NavLink to="/" className={css.navLink}>
            <MaterialUI.Button
              startIcon={<CabinIcon />}
              sx={{ color: 'black' }}
              variant="contained"
            >
              Home
            </MaterialUI.Button>
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts" className={css.navLink}>
              <MaterialUI.Button
                startIcon={<ImportContactsIcon />}
                sx={{ color: 'black' }}
                variant="contained"
              >
                Contacts
              </MaterialUI.Button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
