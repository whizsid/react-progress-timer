import * as React from "react";

interface IProps {
  percentage: number;
  initialText: string;
  finishedText: string;
}

export default class ProgressTimer extends React.PureComponent<IProps> {
  public render() {
    return <div>test</div>;
  }
}
