import { useForm } from 'react-hook-form';

import css from './Filter.module.css';
import icon from '../../images/sprite.svg';


const Filter = () => {
  const { register } = useForm();
  const details = ['airConditioner', 'kitchen', 'beds', 'TV', 'CD', 'radio', 'shower', 'toilet', 'freezer', 'hob', 'microwave', 'gas', 'water'];
 
  const iconName = ((item) => item.toLowerCase());
  
  const outputKey = (item) => { 
    if (item === 'airConditioner') {
      return 'AC';
    } else {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  }

  const handleSearch = () => { 
    event.preventDefault();
  }

  return (   
    <>
			<form className={css.form}>
				<div className={css.formContent}>
                  
          <div>
            <label className={css.label}>Location</label>
            <div className={css.inputContainer}>
              <svg className={css.iconLocation} width='18' height='20'>
                <use href={`${icon}#icon-location`}></use>
              </svg>
              <input {...register('location')} placeholder='Kyiv, Ukraine' className={css.input} />
            </div>
          </div>

          <div>
            <p className={css.text}>Filters</p>
            <h4 className={css.subject}>Vehicle equipment</h4>

            <ul className={css.list}>
              {details.map((detail, index) => (
                <li key={index} className={css.item}>
                  <input id={`${iconName(detail)}`} type='checkbox' {...register('details')} value={`${iconName(detail)}`} />
                    <label type='radio' htmlFor={`${iconName(detail)}`}>
                      <svg className={css.icon} width='22' height='24'>
                        <use href={`${icon}#icon-${iconName(detail)}`}></use>
                      </svg>
                      <p className={css.caption}>{outputKey(detail)}</p>
                      </label>
                  </li>
              ))}
              </ul>
          </div>

          <div>
            <h4 className={css.subject}>Vehicle type</h4>

            <ul className={css.list}>          
              <li className={css.item}>
                <input id='alcove' type='radio' {...register('form-type')} value='alcove' />
                <label type='radio' htmlFor='alcove'>
                  <svg width='40' height='29'>
                    <use href={`${icon}#icon-alcove`}></use>
                  </svg>
                  <p className={css.caption}>Alcove</p>
                </label>
              </li>

              <li className={css.item}>
                <input id='integrated' type='radio' {...register('form-type')} value='Fully Integrated' />
                <label type='radio' htmlFor='integrated'>
                  <svg width='40' height='29'>
                    <use href={`${icon}#icon-fully-integrated`}></use>
                  </svg>
                  <p className={css.caption}>Fully Integrated</p>
                </label>
              </li>

              <li className={css.item}>
                <input id='truck' type='radio' {...register('form-type')} value='panel Truck' />
                <label type='radio' htmlFor='truck'>
                  <svg width='40' height='29'>
                    <use href={`${icon}#icon-van`}></use>
                  </svg>
                  <p className={css.caption}>Panel Truck</p>
                </label>
              </li>

            </ul>
          </div>      
        </div>
        
        <button className={css.button} type='submit' onClick={handleSearch}>Search</button>
			</form>
		</>
  );
};


export default Filter;
