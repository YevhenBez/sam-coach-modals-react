import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from '../../components/layout/css/layout.module.css';
import AppBar from '../../components/appBar/AppBar';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
