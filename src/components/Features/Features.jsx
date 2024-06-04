import FeaturesCategories from '../FeaturesCategories/FeaturesCategories';
import BookingForm from '../BookingForm/BookingForm';

import css from './Features.module.css';


const Features = ({ camper }) => {
    const { form, length, width, height, tank, consumption } = camper;

    return (
        <>
            <div className={css.featuresWrap}>

                <ul className={css.list}>
                    <FeaturesCategories camper={camper} />
                </ul>

                <div className={css.details}>
                    <p className={css.subject}>Vehicle details</p>
                    <div className={css.detailsInner}>
                        <div className={css.row}>
                            <p>Form</p>
                            <p>{form}</p>
                        </div>
                        <div className={css.row}>
                            <p>Length</p>
                            <p>{length}</p>
                        </div>
                        <div className={css.row}>
                            <p>Width</p>
                            <p>{width}</p>
                        </div>
                        <div className={css.row}>
                            <p>Height</p>
                            <p>{height}</p>
                        </div>
                        <div className={css.row}>
                            <p>Tank</p>
                            <p>{tank}</p>
                        </div>
                        <div className={css.row}>
                            <p>Consumption</p>
                            <p>{consumption}</p>
                        </div>
                    </div>
                </div>
            </div>

            <BookingForm />
        </>
    );
};


export default Features;
