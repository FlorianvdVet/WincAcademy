import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";
import DashBoardData from "../StudentData/studentdata.json";

const data = DashBoardData;

let opdrachtArray = data.map(({ Opdracht }) => Opdracht);
console.log(opdrachtArray);

let opdrachtArrayEenmalig = new Set(opdrachtArray);
console.log(opdrachtArrayEenmalig);

class Chart extends React.Component {
  render() {
    return (
      <VictoryChart domainPadding={10}>
        <VictoryGroup
          offset={2}
          data={data}
          x="Opdracht"
          y="Plezier"
          colorScale={["blue", "whitesmoke"]}
        >
          <VictoryBar data={data} x="Opdracht" y="Plezier" />
          <VictoryBar data={data} x="Opdracht" y="Uitdaging" />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default Chart;
