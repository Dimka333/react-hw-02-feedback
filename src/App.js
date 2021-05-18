import { Component } from "react";
import Section from "./components/Section/Sections";
import Statistics from './components/Statistics'
import Notification from './components/Notification'
import FeedbackOptions from './components/FeedbackOptions'




class App extends Component {
   state = {
            good: 0,
            neutral: 0,
            bad: 0
  };
      handleFeedback = (e) => {
        this.setState((prevState) => ({
            [e]: prevState[e] + 1,
        }));
    }
    
    countTotalFeedback = () => {
        return  this.state.bad + this.state.good + this.state.neutral;

  };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (total === 0) {
            return 0;
        }
        return Math.round(((this.state.good / total) * 100))
   }
    
    render() {
      return (
    
          <>
      <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            handleFeedback={this.handleFeedback}
          />
            </Section>
          <Section title= 'Statistics'>
            {this.countTotalFeedback() ? (
              <Statistics 
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage}
              />
            ) : (
                  <Notification message="No feedback given" />
              )}
     </Section>
    </>
  );
   }
}

export default App;
