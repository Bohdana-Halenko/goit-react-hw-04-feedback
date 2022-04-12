import {useState} from 'react';
import Section from './Section/Section';
import ButtonsFeedback from './ButtonsFeedback/ButtonsFeedback';
import Notification from './Notification/Notification';
import Statistic from './Statistic/Statistic';
import './Feedback.module.css';
import PropTypes from 'prop-types';


export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedbackButton = ['Good', 'Neutral', 'Bad'];

    const heandleIncrement = e => {
        const name = e.currentTarget.innerText;
        switch (name) {
            case 'Good':
                setGood(good + 1);
                break;
            case 'Neutral':
                setNeutral(neutral + 1);
                break;
            case 'Bad':
                setBad(bad + 1);
                break;
            default:
            return;
        }
    };

    const countTotalFeedback = () => {
        const total = good + neutral + bad;
        return total;
    };
    
    const countPercentagePositiveFeedback = () => {
        const positiveFeedback = Math.floor((good * 100) / countTotalFeedback());
        return positiveFeedback;
    };

    return (
        <section className='feedbackSection'>
            <Section title="Please leave feedback!">
                <ButtonsFeedback
                    options={feedbackButton}
                    onCountFeedback={heandleIncrement}
                />
            </Section>

            <Section title="Statistics">
                {countTotalFeedback() ? (
                    <Statistic
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        percentagePositiveFeedback={countPercentagePositiveFeedback()}
                    ></Statistic>
                ) : (
                <Notification message="No feedback given" />
                )}           
            </Section>
        </section>
    )
};

Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,    
};