import React from "react";
import ProgressTimer from "../../src/ProgressTimer";

class App extends React.Component {
  public render() {
    return (
      <div>
        <ProgressTimer
          initialText="Please wait starting"
          finishedText="Success"
          percentage={12}
        />
      </div>
    );
  }
}

export default App;
