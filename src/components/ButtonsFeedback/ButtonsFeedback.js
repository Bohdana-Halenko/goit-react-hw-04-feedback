import propTypes from 'prop-types';
import s from './ButtonsFeedback.module.css';

const ButtonsFeedback = ({ options, onCountFeedback }) => (
    <ul className={s.wrap}>
        {options.map(option => (
            <li key={option}>
                <button
                    className={s.button}
                    type='button'
                    name={option}
                    onClick={() => onCountFeedback(option)}
                >
                    {option}
                </button>
            </li>
        ))}
    </ul>
);

export default ButtonsFeedback;


ButtonsFeedback.propTypes = {
    options: propTypes.array,
    option: propTypes.string,
    onCountFeedback: propTypes.func,
};