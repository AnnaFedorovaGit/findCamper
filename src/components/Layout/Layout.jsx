import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import css from './Layout.module.css';


const Layout = () => {

  return (
    <>
      <Header />
      <main>
        <div className={css.container}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};


export default Layout;
