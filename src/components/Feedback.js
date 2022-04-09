import React, {Component} from 'react';
import Section from './Section/Section';
import ButtonsFeedback from './ButtonsFeedback/ButtonsFeedback';
import Notification from './Notification/Notification';
import Statistic from './Statistic/Statistic';
import './Feedback.module.css';


class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    countFeedback = button => {
        this.setState({ [button]: this.state[button] + 1 });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }
    
    countPercentagePositiveFeedback = () => {
        const total = this.countTotalFeedback();
        const positiveFeedback = Math.round((this.state.good * 100) / total);
        return positiveFeedback;
  };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <section className='feedbackSection'>
                <Section title="Please leave feedback!">
                    <ButtonsFeedback
                        options={['good', 'neutral', 'bad']}
                        onCountFeedback={this.countFeedback}
                    />
                </Section>

                {this.countTotalFeedback() === 0 ? (
                    <Notification message="No feedback given" />
                ) : (
                        <Section title="Statistics">
                            <Statistic
                                options={{ good, neutral, bad }}
                                onCountTotalFeedback={this.countTotalFeedback()}
                                onCountPercentagePositiveFeedback={this.countPercentagePositiveFeedback()}
                            />
                        </Section>
                )}
            </section>
        );
    }
}

export default Feedback;