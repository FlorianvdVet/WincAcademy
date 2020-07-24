import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import overallAverage from "../StudentData/StudentDataAverage";
import newArrayAssignments from "../StudentData/AssignmentArray";

class AveragesChart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: newArrayAssignments,
        datasets: [
          {
            label: "Plezier",
            data: overallAverage("Plezier"),
            backgroundColor: "#50bb3d",
          },
          {
            label: "Uitdaging",
            data: overallAverage("Uitdaging"),
            backgroundColor: "#a83dbb",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
        <p>De gemiddelde cijfers van de opdrachten</p>
        <Bar
          data={this.state.chartData}
          width={75}
          height={30}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 5,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default AveragesChart;
