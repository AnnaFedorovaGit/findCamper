import { useState } from 'react';
import { reviewsInfo, locationReverse } from '../../helpers/infoFunctions/infoFunctions.jsx';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

import css from './CamperCardDetails.module.css';
import icon from '../../images/sprite.svg';


const CamperCardDetails = ({ camper }) => {
    const [activeTab, setActiveTab] = useState('features');
    const { name, location, price, gallery, description, rating, reviews } = camper;
    
    const handleSetTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <div className={css.headingInner}>
                <h3 className={`${css.heading} ${css.title}`}>{name}</h3>

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

                <p className={css.heading}>&#8364;{price.toFixed(2)}</p>
            </div>

            <div className={css.scrollBlock}>
                <ul className={css.imageWrapper}>
                    {gallery.map((image, index) => 
                    <li key={index}>
                        <img className={css.image} src={image} alt={name} />
                    </li>
                    )}
                </ul>

                <p className={css.desc}>{description}</p>

                <div className={css.buttonsWrap}>
                    <button className={`${css.button} ${(activeTab === 'features') ? css.active : null}`} onClick={() => handleSetTab('features')}>Features</button>
                    <button className={css.button} onClick={() => handleSetTab('reviews')}>Reviews</button>
                </div>

                <div className={css.container}>
                    {(activeTab === 'features') && <Features camper={camper} />}
                    {(activeTab === 'reviews') && <Reviews camper={camper} />} 
                </div>
            </div>  
        </>
    );
};


export default CamperCardDetails;
