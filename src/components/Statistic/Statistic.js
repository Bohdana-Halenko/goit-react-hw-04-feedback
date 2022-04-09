import propTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistic = ({
    options,
    onCountTotalFeedback,
    onCountPercentagePositiveFeedback,
}) => (
    <ul className={s.list}>
        <li className={s.box}>
            <p className={s.stat}>Good: {options.good}</p>
        </li>
        <li className={s.box}>
            <p className={s.stat}>Neutral: {options.neutral}</p>
        </li>
        <li className={s.box}>
            <p className={s.stat}>Bad: {options.bad}</p>
        </li>
        <li className={s.box}>
            <p className={s.total}>Total: {onCountTotalFeedback}</p>
        </li>
        <li className={s.box}>
            <p className={s.positivePer}>Positive feedback: {onCountPercentagePositiveFeedback}%</p>
        </li>
    </ul>
);

export default Statistic;

Statistic.propTypes = {
    options: propTypes.number,
    onCountTotalFeedback: propTypes.number,
    onCountPercentagePositiveFeedback: propTypes.number,
};
