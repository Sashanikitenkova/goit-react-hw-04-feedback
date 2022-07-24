import React, {Component} from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistic  from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };

  onLeaveFeedback = feedback => {
      this.setState(prevState => ({
              [feedback]: prevState[feedback] +1,
      }));
  }
    
  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return bad + neutral + good;
  }
      
  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      return (
          ((good/(bad + neutral + good))*100).toFixed(0)
      )
  }

render() {
  const { good, neutral, bad } = this.state;
  const optionsName = Object.keys(this.state);
 
  return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
                options={optionsName}
                onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? 
          <Statistic 
                 good={good} 
                 neutral={neutral} 
                 bad={bad} 
                 total={this.countTotalFeedback()} 
                 positivePercentage={this.countPositiveFeedbackPercentage()}
           />
            :
           <Notification message="There is no feedback"/>
        }
        </Section>
      </div>
  );
}
}
