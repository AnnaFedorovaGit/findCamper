import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampersList, selectisDataEmpty, selectPage } from '../../redux/adverts/selectors';
import { fetchAllCampers } from '../../redux/adverts/operations';
import { setPage } from '../../redux/adverts/slice';
import CamperCard from '../../components/CamperCard/CamperCard';
import Filter from '../../components/Filter/Filter';

import css from './CatalogPage.module.css';


const CatalogPage = () => {
  const [favouriteList, setFavouriteList] = useState([]);
  const campers = useSelector(selectCampersList);
  const isDataEmpty = useSelector(selectisDataEmpty);
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();

  const isFullArray = (campers.length % 4) === 0; 

  useEffect(() => {   
    if (campers.length === 0) {
      dispatch(fetchAllCampers(currentPage));
    }
  }, [dispatch, currentPage, campers.length]);
  
  useEffect(() => {
    const value = localStorage.getItem('favouriteList');
    
    if (value) {
      setFavouriteList(JSON.parse(value));
    }
  }, []);
  
  const handleLoadPage = () => {
    const page = currentPage + 1;
    dispatch(setPage(page));
    dispatch(fetchAllCampers(page));
  }
  
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
    localStorage.setItem('favouriteList', JSON.stringify(list));
  }

  return (
    <div className={css.container}>
      <div>
        <Filter />
      </div>

      <div className={css.listWrap}>
        <ul className={css.list}>
          {campers.map((camper) => 
            <CamperCard key={camper._id} camper={camper} onFavourite={handleFavourite} favouriteList={favouriteList} />
          )}
        </ul>
        <button disabled={isDataEmpty} className={`${css.button} ${isFullArray ? css.active : css.disabled}`} onClick={handleLoadPage}>
          <p className={css.textButton}>Load more</p>
        </button>
      </div>

    </div>
  );
};


export default CatalogPage;
