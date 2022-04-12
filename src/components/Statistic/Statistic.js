import React from "react";
import PropTypes from 'prop-types';
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
    )
};

Statistic.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentagePositiveFeedback: PropTypes.number,
};

export default Statistic;

