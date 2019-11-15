import {Component} from "react";

interface IProps {
	percentage: number;
	initialText?: string;
	completedText?: string;
	format?: string;
	formatter?: (unixTime: number) => string;
	calculateByAverage?: boolean;
	decreaseTime?: boolean;
}

declare class ProgressTimer extends Component<IProps> {
	constructor(props:IProps);
}

export default ProgressTimer;