import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchFilteredCampers } from '../../redux/adverts/operations';
import { outputKey, iconName } from '../../helpers/infoFunctions/infoFunctions';

import css from './Filter.module.css';
import icon from '../../images/sprite.svg';


const Filter = () => {
  const dispatch = useDispatch();
  const { register } = useForm();
  // const { register, handleSubmit } = useForm();
  const details = ['airConditioner', 'kitchen', 'beds', 'TV', 'CD', 'radio', 'shower', 'toilet', 'freezer', 'hob', 'microwave', 'gas', 'water'];

  const [selectFilters, setSelectFilters] = useState({ location: '', form: '' });
  // const [selectFilters, setSelectFilters] = useState({ location: '', details: [], form: '' });

  const handleSetLocation = (event) => {
    const newLocation = event.target.value;
    setSelectFilters({ ...selectFilters, location: newLocation });
  };
    
  const handleSetType = (event) => {
    const newType = event.target.value;
    setSelectFilters({ ...selectFilters, type: newType });
  };

  // const handleSetEquipment = (event) => {
  //   const { checked } = event.target;
  //   const newEquipment = event.target.value;
    
  //   if (checked) {
  //       setSelectFilters({ ...selectFilters, details: [...selectFilters.details, newEquipment]});
  //     } else {
  //       setSelectFilters({ ...selectFilters, details: selectFilters.details.filter((details) => details !== newEquipment)});
  //     }
  //   };
    console.log(selectFilters);
    
  useEffect(() => {
    dispatch(fetchFilteredCampers(selectFilters));
  }, [dispatch, selectFilters])

  return (   
    <>
			<form className={css.form}>
			{/* <form onSubmit={handleSubmit(onSubmit)} className={css.form}> */}
				<div className={css.formContent}>
                  
          <div>
            <label className={css.label}>Location</label>
            <div className={css.inputContainer}>
              <svg className={css.iconLocation} width='18' height='20'>
                <use href={`${icon}#icon-location`}></use>
              </svg>
              <input {...register('location')} onChange={handleSetLocation} placeholder='Kyiv, Ukraine' className={css.input} />
            </div>
          </div>

          <div>
            <p className={css.text}>Filters</p>
            <h4 className={css.subject}>Vehicle equipment</h4>

            <ul className={css.list}>
              {details.map((detail, index) => (
                <li key={index} className={css.item}>
                  {/* <input id={`${iconName(detail)}`} type='checkbox' {...register('details')} value={`${iconName(detail)}`} onChange={handleSetEquipment} /> */}
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
                <input id='alcove' type='radio' {...register('form')} value='alcove' onChange={handleSetType} />
                <label type='radio' htmlFor='alcove'>
                  <svg width='40' height='29'>
                    <use href={`${icon}#icon-alcove`}></use>
                  </svg>
                  <p className={css.caption}>Alcove</p>
                </label>
              </li>

              <li className={css.item}>
                <input id='integrated' type='radio' {...register('form')} value='fully Integrated' onChange={handleSetType} />
                <label type='radio' htmlFor='integrated'>
                  <svg width='40' height='29'>
                    <use href={`${icon}#icon-fully-integrated`}></use>
                  </svg>
                  <p className={css.caption}>Fully Integrated</p>
                </label>
              </li>

              <li className={css.item}>
                <input id='truck' type='radio' {...register('form')} value='panel Truck' onChange={handleSetType} />
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
        
        <button className={css.button} type='submit'>Search</button>
      </form>
		</>
  );
};


export default Filter;
