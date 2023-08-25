import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import Layout from '../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { lazy } from 'react';
const Contacts = lazy(() => import('../pages/contacts/Contacts'));
const Home = lazy(() => import('../pages/home/Home'));
const RegisterForm = lazy(() => import('../pages/registerForm/RegisterForm'));
const Login = lazy(() => import('../pages/login/Login'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterForm />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    )
  );
};

export default App;

// import ContactForm from './contactForm/ContactForm';
// import ContactList from './contactList/ContactList';
// import Filter from './Filter/Filter';
// import Loader from './loader/Loader';
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from '../redux/selectors';

// const App = () => {
//   const isLoadingApp = useSelector(selectIsLoading);

//   console.log(`Проверка isLoading ${isLoadingApp}`);

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       {/* React homework template */}
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         {isLoadingApp && <Loader />}
//         <ContactList />
//       </div>
//     </div>
//   );
// };

// export default App;
