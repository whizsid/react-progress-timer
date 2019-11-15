import React from "react";
import ProgressTimer from "../../src/ProgressTimer";

interface IState {
  averagePercentage: number;
  percentage: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      averagePercentage: 0,
      percentage: 0
    };

    const interval = window.setInterval(() => {
      const { percentage } = this.state;
      if (percentage < 100) {
        this.setState({ percentage: percentage + 1 });
      } else {
        window.clearInterval(interval);
      }
    }, 1000);

    this.changeAveragePercentage();
  }

  public render() {
    const { averagePercentage, percentage } = this.state;
    return (
      <div>
        <h1>React Progress Timer</h1>
        <hr />
        <h4>Simple Timer</h4>
        <h5>Percentage {percentage}%</h5>
        <ProgressTimer
          initialText="Please wait starting"
          completedText="Success"
          percentage={percentage}
        />
        <hr />

        <h4>Time decreasing feature</h4>
        <h5>
          Percentage {percentage < 60 || percentage > 80 ? percentage : 60}%
        </h5>
        <p>
          This percentage is stopping after 60 and starting again after 80. But
          time is changing according to spent time.
        </p>
        <ProgressTimer
          initialText="Please wait starting"
          completedText="Success"
          percentage={percentage < 60 || percentage > 80 ? percentage : 60}
          calculateByAverage={true}
          decreaseTime={true}
        />
        <hr />

        <h4>Calculating time by average percentage</h4>
        <h5>Percentage {averagePercentage}%</h5>
        <p>This percentage is changing with a dynamic speed.</p>
        <ProgressTimer
          initialText="Please wait starting"
          completedText="Success"
          percentage={averagePercentage}
          calculateByAverage={true}
        />
      </div>
    );
  }

  protected changeAveragePercentage = () => {
    window.setTimeout(
      () => {
        const { averagePercentage } = this.state;

        if (averagePercentage < 100) {
          this.setState({ averagePercentage: averagePercentage + 1 });
          this.changeAveragePercentage();
        }
      },
      this.state.averagePercentage % 2 ? 500 : 1500
    );
  };
}

export default App;
