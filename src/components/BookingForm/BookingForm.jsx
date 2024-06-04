import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { sendForm } from '../../redux/adverts/operations';
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.css';
import icon from '../../images/sprite.svg';


const BookingForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    date: yup.date().required(),
    comment: yup.string(),
  });

  const { control, register, handleSubmit, reset, formState: { errors }, watch } = useForm({
    mode: 'onChanges',
    reValidateMode: 'onChange',

    resolver: yupResolver(validationSchema),
    defaultValues: { name: '', email: '', date: '', comment: '' }
  });

  const dateReceived = watch('date');
  
  const onSubmit = (form) => {
    form.date = dateReceived;

    dispatch(sendForm(form));
    reset();
    // перезавантаження сторінки:
    window.location.reload();
  };

  return (
    <>
			<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>
        
        <input {...register('name', { required: true })} type='text' placeholder='Name' className={`${css.inputCommon} ${css.input}`} />
        {errors.name && <span className={css.errorMessage}>this field is required</span>}

        <div className={css.inputsInner}>
          <input {...register('email', { required: true })} type='text' placeholder='Email' className={`${css.inputCommon} ${css.input}`} />
          {errors.email && <span className={css.errorMessage}>please enter a valid email</span>}
        </div>

        <div className={css.inputsInner}>
          <div className={css.inputContainer}>
            <Controller
              name='date'
              control={control}
              render={({ field }) => (
                <DatePicker
                {...field}
                  selected={dateReceived}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  dateFormat='dd MMMM yyyy'
                  calendarStartDay={1}
                  placeholderText='Booking date'
                  className={`${css.inputCommon} ${css.inputCalendar}`}
                  calendarClassName={css.calendarStyles}
                  minDate={new Date()}
                  popperProps={{ modifiers: { preventOverflow: { enabled: false } } }}
                  formatWeekDay={(day) => day.substr(0, 3).toUpperCase()}
                />
              )}
            />
            <svg className={css.iconCalendar} width='20' height='20'>
              <use href={`${icon}#icon-calendar`}></use>
            </svg>
          </div>
          {errors.date && <span className={css.errorMessage}>this field is required</span>}
        </div>

        <div className={css.inputsInner}>
          <textarea {...register('comment')} type='text' placeholder='Comment' className={`${css.inputCommon} ${css.textarea}`} />
        </div>

        <button type='submit' className={css.button}>
          <p className={css.buttonText}>Send</p>
        </button>
			</form>
		</>
  );
};


export default BookingForm;
