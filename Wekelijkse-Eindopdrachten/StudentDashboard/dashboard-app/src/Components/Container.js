import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { Bar } from "react-chartjs-2";
import AssignmentsChart from "./AssignmentChart";
import AveragesChart from "./AveragesChart";
import studentArray from "../StudentData/Student";
import Navbar from "./Navbar";

class Container extends Component {
  render() {
    return (
      <Router>
        <div className="mainContainer">
          <Switch>
            <Route exact path="/">
              <AveragesChart />
            </Route>
            <Route path="/AssignmentsChart">
              <AssignmentsChart />
            </Route>
            <Route path="/:id" children={<Child />} />
          </Switch>
          <Navbar />
        </div>
      </Router>
    );
  }
}

const Child = () => {
  let { id } = useParams();
  const dataForChart = {
    labels: studentArray(id, "Opdracht"),
    datasets: [
      {
        label: "Plezier",
        data: studentArray(id, "Plezier"),
        backgroundColor: "#50bb3d",
      },
      {
        label: "Uitdaging",
        data: studentArray(id, "Uitdaging"),
        backgroundColor: "#a83dbb",
      },
    ],
  };

  return (
    <div>
      <p>De beoordelingen van {id}</p>
      <Bar
        data={dataForChart}
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
};

export default Container;
