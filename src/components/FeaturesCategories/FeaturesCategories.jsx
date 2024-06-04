import css from './FeaturesCategories.module.css';
import icon from '../../images/sprite.svg';


const FeaturesCategories = ({ camper }) => {
    const { adults, engine, transmission, details } = camper;

    const output = ((key) => key.charAt(0).toUpperCase() + key.slice(1)); 
    const iconName = ((key) => key.toLowerCase());

    const outputKey = (key) => { 
        if (key === 'airConditioner') {
            return 'AC';
        } else {
            return key.charAt(0).toUpperCase() + key.slice(1);
        }
    }

    const outputValue = (value) => {
        if (typeof value === 'number' && value > 1) {
            return value;
        }  
    }

    return (
        <>
            <li>
                <div className={css.category}>
                    <svg className={css.icon} width='20' height='20'>
                        <use href={`${icon}#icon-adults`}></use>
                    </svg>
                    <p className={css.text}>{adults} Adults</p>
                </div>
            </li>

            <li>
                <div className={css.category}>
                    <svg className={css.icon} width='20' height='20'>
                        <use href={`${icon}#icon-petrol`}></use>
                    </svg>
                    <p className={css.text}>{output(engine)}</p>
                </div>
            </li>

            <li>
                <div className={css.category}>
                    <svg className={css.icon} width='20' height='20'>
                        <use href={`${icon}#icon-automatic`}></use>
                    </svg>
                    <p className={css.text}>{output(transmission)}</p>
                </div>
            </li>

            {Object.entries(details)
                .filter(([, detailValue]) => !(detailValue === 0 || detailValue === ''))
                .map(([detailKey, detailValue], index) => (
                    <li key={index}>
                        <div className={css.category}>
                            <svg className={css.icon} width='20' height='20'>
                                <use href={`${icon}#icon-${iconName(detailKey)}`}></use>
                            </svg>
                            <p className={css.text}>{outputValue(detailValue)} {outputKey(detailKey)}</p>
                        </div>
                    </li>
            ))}
        </>
    );
};


export default FeaturesCategories;
