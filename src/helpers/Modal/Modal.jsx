import { useEffect, useRef } from 'react';

import css from './Modal.module.css';
import icon from '../../images/sprite.svg';


const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const closeModal = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return isOpen && (
    <div className={css.overlay} onClick={handleClickOutside}>
      <div className={css.modal} ref={modalRef}>
        <button className={css.button} onClick={onClose}>
          <svg className={css.icon} width='32' height='32'>
            <use href={`${icon}#icon-close`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};


export default Modal;
