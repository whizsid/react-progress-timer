<p align="center">
	<a href="https://github.com/whizsid/react-progress-timer">
			<img src="https://i.imgur.com/9FlfaSt.png" />
	</a>
</p>

---
<p align="center">
	<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="Travis:Status"/></a>
	<a href="https://travis-ci.org/whizsid/react-progress-timer"><img src="https://travis-ci.org/whizsid/react-progress-timer.svg?branch=master" alt="Travis:Status"/></a>
	<a href="https://github.com/whizsid/react-progress-timer"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="Code Style: Prettier"/></a>
	<a href="https://www.npmjs.com/package/react-progress-timer"><img src="https://img.shields.io/npm/v/react-progress-timer" alt="NPM: Version"/></a>
</p>

---

This react component will automatically calculate the time to complete a progress bar by percentage changing speed. You want supply only the current percentage as a prop.

## Features

- Calculate the time by percentage changing speed or average.
- Automatically reducing the time even percentage will not changed.

### [Watch Demo >>](https://whizsid.github.io/react-progress-timer)


## Installation

You can install this component using yarn or npm

```
//yarn
$ yarn add react-progress-timer

//npm
$ npm install react-progress-timer --save
```

## Usage

```
import ProgressTimer from 'react-progress-timer';

...
	<ProgressTimer
		percentage={percent}
	/>

```

## Documentation

Please provide following props. Props that marked with leading (*) are required.

| Prop | Description | Type |
| ------------- |:-------------| :-----|
| *percentage | Current percentage of the progress | number|
| initialText | Text to display when initializing. Default is `Initializing` | string |
| completedText | Text to display after completed the task. Default is `Completed` | string |
| decreaseTime | With this prop time will automatically decreasing even percentage not changed. By default this feature is enabled. | boolean |
| calculateByAverage | Calculating time by average speed. By default calculating the speed by current speed | boolean|
| format | Format to display the remaining time. Default:- `Completing in {value} {unit}`. You can also use the `{percentage}` placeholder. | string|
| formatter | You can use your own formatter to format your string. Supply time in nano second to first parameter. | (time:number)=>string |
| rollingAverageWindowSize | When calculating by current speed, this specifies how many past values will be considered as "current". Default is 1 | number

## Developing

1. Clone the repository

```
$ git clone https://github.com/whizsid/react-progress-timer`
```

2. Install the dependencies

```
$ cd react-progress-timer
$ yarn
```

3. Start the development server

```
yarn start
```

## Contributing

Please lint your code before made a PR.

```
$ yarn lint
```

Always follow prettier code styles and check before making your PR.

```
$ yarn prettier
```

I will reply to all PRs when I have a free time. Issues and stars also welcome.
