// import PropTypes from 'prop-types';

import { Component } from "react";

class Feedback extends Component {
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
    


    // handleGoodFeedback = () => {
    //     this.setState((prevState) => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });
    // };

    // handleNeutralFeedback = () => {
    //     this.setState((prevState) => {
    //         return {
    //             neutral: prevState.neutral + 1,
    //         };
    //     });
    // };

    // handleBadFeedback = () => {
    //     this.setState((prevState) => {
    //         return {
    //             bad: prevState.bad + 1,
    //         };
    //     });
    // };

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
            <div>
            <h1>Please leave feedback</h1>
            <button type='button' id='good' onClick={() => this.handleFeedback('good')}>Good</button>
            <button type='button' id='neutral' onClick={() => this.handleFeedback('neutral')}>Neutral</button>
            <button type='button' id='bad' onClick={() => this.handleFeedback('bad')}>bad</button>
            
            <span>Statistics</span>
                <p>Good:{this.state.good}</p>
                <p>Neutral:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total:{this.countTotalFeedback()}</p>
                <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div>
       )
   }
  }


export default Feedback;