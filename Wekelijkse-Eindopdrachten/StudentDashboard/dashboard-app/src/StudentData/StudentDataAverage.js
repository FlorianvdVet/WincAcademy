import React, { Component } from "react";
import data from "./studentdata.json";

let sortOpdracht = data.filter((item) => item.Opdracht === "SCRUM");
console.log(sortOpdracht);

console.log(data);

let sortOpdracht1 = data.filter((item) => item.Opdracht === "W1D1-1");
console.log(sortOpdracht1);

let sortOpdracht2 = data.filter((item) => item.Opdracht === "W1D2-1");
console.log(sortOpdracht2);

let sortOpdracht3 = data.filter((item) => item.Opdracht === "W1D2-2");
console.log(sortOpdracht3);

data.forEach((item) => {
  console.log(item.Opdracht.value);
});

//Voor elke opdracht geef een gemiddelde terug
//Check voor elke opdracht of de string overeenkomt
//Tel die waarden bij elkaar op en / 10
/* 
data.forEach((item) => {
  console.log(item.Opdracht);
}); */

class StudentData extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        {sortOpdracht.map((item) => {
          return (
            <h2>
              Opdracht: {item.Opdracht} Naam student: {item.Naam} Uitdaging:{" "}
              {item.Uitdaging} Plezier: {item.Plezier}
            </h2>
          );
        })}
        <p>test</p>
      </div>
    );
  }
}

export default StudentData;
