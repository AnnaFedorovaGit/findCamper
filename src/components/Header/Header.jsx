import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';


const Header = () => {

  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink to='/' className={css.logoWrap}>
          <Logo className={css.logo} />
          <p className={css.logoText}>Find Camper</p>
        </NavLink>
        <div className={css.navWrap}>
          <NavLink to='/' className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}>Home</NavLink>
          <NavLink to='/catalog' className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}>Catalog</NavLink>
          <NavLink to='/favorites' className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}>Favorites</NavLink>
        </div>
      </div>
    </header>
  );
};


export default Header;
