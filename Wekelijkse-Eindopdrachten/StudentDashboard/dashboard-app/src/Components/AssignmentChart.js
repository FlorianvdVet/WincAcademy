import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import newArrayAssignments from "../StudentData/AssignmentArray";
import assignmentStudent from "../StudentData/Grades";

class AssignmentsChart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: assignmentStudent("SCRUM", "Naam"),
        datasets: [
          {
            label: "Plezier",
            data: [],
            backgroundColor: "#50bb3d",
          },
          {
            label: "Uitdaging",
            data: [],
            backgroundColor: "#a83dbb",
          },
        ],
      },
    };
  }

  handleChange = (x) => {
    const assignments = x.target.value;
    const newState = Object.assign({}, this.state);
    newState.chartData.datasets[0].data = assignmentStudent(
      assignments,
      "Uitdaging"
    );
    newState.chartData.datasets[1].data = assignmentStudent(
      assignments,
      "Plezier"
    );
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <p>Resultaten per opdracht</p>
        <select value={this.state.data} onChange={this.handleChange}>
          <option className="Empty" value="">
            Kies een opdracht:
          </option>
          {newArrayAssignments.map((item) => (
            <option onClick={this.handleClick} key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div>
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
      </div>
    );
  }
}

export default AssignmentsChart;
