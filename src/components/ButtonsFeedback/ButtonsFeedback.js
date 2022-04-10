import PropTypes from 'prop-types';
import s from './ButtonsFeedback.module.css';

function ButtonsFeedback({ options, onCountFeedback }) {
    return options.map(option => (
        <div className={s.wrap}>
            <button
                className={s.button}
                type='button'
                key={option}
                onClick={onCountFeedback}
            >
                {option}
            </button>
        </div>
        
    ));
}

export default ButtonsFeedback;


ButtonsFeedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onCountFeedback: PropTypes.func.isRequired,
};