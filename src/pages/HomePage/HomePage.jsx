import { NavLink } from 'react-router-dom';

import css from './HomePage.module.css';


const HomePage = () => {

  return (
    <div className={css.titleWrap}>
      <h1 className={css.title}>Welcome to the campers shop!</h1>
      <h2 className={css.subject}>Book the camper from the{' '}
        <NavLink to='/catalog' className={css.link}>catalog</NavLink>
      </h2>
    </div>
  );
};


export default HomePage;
