import propTypes from 'prop-types';
import s from './Statistic.module.css';

function Statistic({ good, neutral, bad, total, percentagePositiveFeedback }) {
    return (
        <ul className={s.list}>
            <li className={s.box}>
                <p className={s.stat}>Good: {good}</p>
            </li>
            <li className={s.box}>
                <p className={s.stat}>Neutral: {neutral}</p>
            </li>
            <li className={s.box}>
                <p className={s.stat}>Bad: {bad}</p>
            </li>
            <li className={s.box}>
                <p className={s.total}>Total: {total}</p>
            </li>
            <li className={s.box}>
                <p className={s.positivePer}>Positive feedback: {percentagePositiveFeedback}%</p>
            </li>
        </ul>
    );
}

export default Statistic;

Statistic.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    percentagePositiveFeedback: propTypes.number.isRequired,
};
