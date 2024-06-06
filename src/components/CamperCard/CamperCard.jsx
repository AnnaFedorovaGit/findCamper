
import useModal from '../../hooks/useModal.js';
import Modal from '../../helpers/Modal/Modal.jsx';
import { reviewsInfo, locationReverse } from '../../helpers/infoFunctions/infoFunctions.jsx';
import CamperCardDetails from '../CamperCardDetails/CamperCardDetails.jsx';
import FeaturesCategories from '../FeaturesCategories/FeaturesCategories.jsx';

import css from './CamperCard.module.css';
import icon from '../../images/sprite.svg';


const CamperCard = ({ camper, favouriteList, onFavourite }) => {
  const { _id, name, location, price, gallery, description, rating, reviews } = camper;
  const { isModalOpen, openModal, closeModal } = useModal();

  const isFavorite = (_id) => { 
    return Boolean(favouriteList.find((item) => _id === item._id));
  }
  
    return (
      <li className={css.item}>
        <div className={css.imageWrapper}>
          <img className={css.image} src={gallery[0]} alt={name} />
        </div>

        <div className={css.infoWrapper}>

          <div className={css.headingInner}>
            <h3 className={css.heading}>{name}</h3>
            <div className={css.priceInner}>
              <p className={css.heading}>&#8364;{price.toFixed(2)}</p>
              <button className={css.buttonFavourite} onClick={() => onFavourite(camper)}>
                <svg className={isFavorite(_id) ? css.active : css.iconFavourite} width='21' height='19'>
                  <use href={`${icon}#icon-favourite`}></use>
                </svg>
              </button>
            </div>
          </div>

          <div className={css.boxInner}>

          <div className={css.subjectInner}>
              <div className={css.holder}>
                <svg className={css.iconRating} width='16' height='16'>
                  <use href={`${icon}#icon-rating`}></use>
                </svg>
                <p className={`${css.subject} ${css.reviews}`}>{reviewsInfo(rating, reviews)}</p>
              </div>
              
              <div className={css.holder}>
                <svg className={css.iconLocation} width='16' height='16'>
                    <use href={`${icon}#icon-location`}></use>
                </svg>
                <p className={css.subject}>{locationReverse(location)}</p>
              </div>
          </div>
          
          <p className={css.desc}>{description}</p>
          <ul className={css.list}>
              <FeaturesCategories camper={camper} />
          </ul>
          <button className={css.button} type='button' onClick={openModal}>Show more</button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CamperCardDetails camper={camper}/>
        </Modal>
        
      </div>
      </div>
    </li>
  );
};


export default CamperCard;