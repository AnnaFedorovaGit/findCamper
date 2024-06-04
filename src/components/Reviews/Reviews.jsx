import BookingForm from '../BookingForm/BookingForm';

import icon from '../../images/sprite.svg';
import css from './Reviews.module.css';


const Reviews = ({ camper }) => {

  const firstLetter = (name) => {
    const output = `${name.slice(0, 1)}`;
    return output.toUpperCase();
  }

  const Rating = ({ reviewer_rating, index }) => { 
    if (index <= reviewer_rating) { 
      return (
        <svg style={{ fill: 'var(--rating)' }} className={css.icon} width='16' height='16'>
          <use href={`${icon}#icon-rating`}></use>
        </svg>
      );
    }

    return (
      <svg className={css.icon} width='16' height='16'>
        <use href={`${icon}#icon-rating`}></use>
      </svg>
    );
  }

  return (
    <>
      <ul className={css.list}>
        {camper.reviews.map((review, index) => 
          <li key={index}>
            <div className={css.captionWrap}>
              <div className={css.circle}>
                <p className={css.titleShort}>{firstLetter(review.reviewer_name)}</p>
              </div>
              <div>
                <p className={css.title}>{review.reviewer_name}</p>
                <>
                  <Rating reviewer_rating={review.reviewer_rating} index={1} />
                  <Rating reviewer_rating={review.reviewer_rating} index={2} />
                  <Rating reviewer_rating={review.reviewer_rating} index={3} />
                  <Rating reviewer_rating={review.reviewer_rating} index={4} />
                  <Rating reviewer_rating={review.reviewer_rating} index={5} />
                </>
              </div>
            </div>
            <p className={css.text}>{review.comment}</p>
          </li>
        )}
      </ul> 

      <BookingForm />
    </>
  );
};


export default Reviews;
