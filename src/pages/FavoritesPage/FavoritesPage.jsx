import { useEffect, useState } from "react";
import CamperCard from '../../components/CamperCard/CamperCard';

import css from './FavoritesPage.module.css';


const FavoritesPage = () => {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    const value = localStorage.getItem('favouriteList');
  
    if (value) {
      setFavouriteList(JSON.parse(value));
    }
  }, []); 
  
  const handleFavourite = (value) => {
    const index = favouriteList.findIndex((item) => item._id === value._id);
    let list = [];
    
    if (index !== -1) {
      favouriteList.splice(index, 1);
      list = [...favouriteList];
    } else {
      list = [...favouriteList, value];
    }
    
    setFavouriteList(list);
    localStorage.setItem('favouriteList', JSON.stringify(list)) 
  }

  return (
    <>
      {favouriteList.length > 0 ? (
        <h1 className={css.title}>Favourites List</h1>
      ) : (
        <h1 className={css.title}>Favourites List is empty</h1>
      )}

      {favouriteList.length > 0 &&
        <ul className={css.list}>
          {favouriteList.map((camper) =>
            <CamperCard key={camper._id} camper={camper} onFavourite={handleFavourite} favouriteList={favouriteList} />
          )}
      </ul>}
    </>
  );
};


export default FavoritesPage;
