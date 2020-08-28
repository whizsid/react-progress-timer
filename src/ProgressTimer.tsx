import * as React from "react";
import defaultFormatter from "./defaultFormatter";

interface IProps {
  percentage: number;
  initialText?: string;
  completedText?: string;
  format?: string;
  formatter?: (unixTime: number) => string;
  calculateByAverage?: boolean;
  decreaseTime?: boolean;
  rollingAverageWindowSize?: number;
}

interface IPercentage {
  percentage: number;
  time: number;
}

interface IState {
  percentages: IPercentage[];
  startedTime: number;
  decreseKey: number;
}

export default class ProgressTimer extends React.Component<IProps, IState> {
  public static defaultProps = {
    calculateByAverage: false,
    completedText: "Completed",
    decreaseTime: true,
    format: "Completing in {value} {unit}",
    initialText: "Initializing",
    rollingAverageWindowSize: 1
  };

  constructor(props: IProps) {
    super(props);

    const date = new Date();

    this.state = {
      decreseKey: 0,
      percentages: [],
      startedTime: date.getTime()
    };

    // If decrease option is enabled decrease key is changing for each second
    // to refreshing the component
    if (props.decreaseTime) {
      window.setInterval(() => {
        const { decreseKey } = this.state;
        this.setState({ decreseKey: decreseKey + 1 });
      }, 1000);
    }
  }

  public componentDidUpdate(prevProps: IProps) {
    const { percentages } = this.state;
    if (this.props.percentage !== prevProps.percentage) {
      const time = new Date();

      percentages.push({
        percentage: this.props.percentage,
        time: time.getTime()
      });
    }
  }

  public render() {
    const {
      percentage,
      initialText,
      completedText,
      calculateByAverage,
      formatter,
      decreaseTime,
      format,
      rollingAverageWindowSize
    } = this.props;
    const { percentages, startedTime } = this.state;

    if (percentage <= 0 || percentages.length < 2) {
      return initialText;
    }

    if (percentage >= 100) {
      return completedText;
    }

    let estTime;

    const lastPercentage = percentages[percentages.length - 1];

    if (calculateByAverage) {
      const timeDif = lastPercentage.time - startedTime;

      const timePerChanged = timeDif / lastPercentage.percentage;

      estTime = timePerChanged * (100 - lastPercentage.percentage);
    } else {
      const windowBeginningIndex = Math.max(
        0,
        percentages.length - (rollingAverageWindowSize || 1) - 1
      );

      const windowBeginningPercentage = percentages[windowBeginningIndex];

      const timeDif = lastPercentage.time - windowBeginningPercentage.time;

      const changed =
        lastPercentage.percentage - windowBeginningPercentage.percentage;

      const timePerChanged = timeDif / changed;

      estTime = timePerChanged * (100 - percentage);
    }

    if ( isNaN( estTime ) ) {
      return initialText;
    }

    if (decreaseTime) {
      const currentTime = new Date();

      estTime -= currentTime.getTime() - lastPercentage.time;

      if (estTime < 0) {
        estTime = 0;
      }
    }

    if (formatter) {
      return formatter(estTime);
    }

    if (format) {
      return defaultFormatter(estTime, percentage, format);
    }

    return null;
  }
}
