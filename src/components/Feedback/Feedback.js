// import PropTypes from 'prop-types';

import { Component } from "react";

class Feedback extends Component {
        state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
    hendleGoodFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    hendleNeutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };

    hendleBadFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };

//     hendleTotalFeedback = () => {
//         return {
//          this.state.bad + this.state.good + this.state.neutral;
//     } 
//   };
    
    
    hendlePositiveFeedback = () => {
        const total = this.hendleTotalFeedback();
        if (total === 0) {
            return 0;
        }
        return ((this.state.good / total) * 100)
   }
    
    render() {
        return (
            <div>
            <h1>Please leave feedback</h1>
            <button type='button' onClick={this.hendleGoodFeedback}>Good</button>
            <button type='button' onClick={this.hendleNeutralFeedback}>Neutral</button>
            <button type='button' onClick={this.hendleBadFeedback}>Bad</button>
            <span>Statistics</span>
                <p>Good:{this.state.good}</p>
                <p>Neutral:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
                <p>Total:{this.hendleTotalFeedback}</p>
                <p>Positive feedback: {this.hendlePositiveFeedback}</p>
                </div>
       )
   }
  }


export default Feedback;