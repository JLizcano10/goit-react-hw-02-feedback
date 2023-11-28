import { Container } from 'components/App/App.styles';
import FeedbackButtons from 'components/FeedbackButtons/FeedbackButtons';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    const positivePercentage = (positiveFeedback / total) * 100;
    if (total === 0) {
      return 0;
    }
    return Number(positivePercentage).toFixed(1);
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackButtons options={options} increment={this.handleIncrement} />
        </Section>
        <Section title={'Statistics'}>
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.neutral > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <h3 style={{ fontSize: '25px', fontWeight: '400' }}>
              No feedback given
            </h3>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
