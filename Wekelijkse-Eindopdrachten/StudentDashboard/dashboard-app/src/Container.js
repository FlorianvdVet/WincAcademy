import React, { Component } from "react";
import StudentData from "./StudentData/StudentDataAverage";
import Chart from "./Components/Chart";

class Container extends Component {
  render() {
    return (
      <div>
        <Chart />
        <StudentData />
      </div>
    );
  }
}

export default Container;
