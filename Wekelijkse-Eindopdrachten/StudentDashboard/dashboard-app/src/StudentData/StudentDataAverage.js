import data from "./studentdata.json";

const gradesAverage = (task, typeOfGrade) => {
  const assignmentToGet = data
    .filter((assignment) => {
      return assignment["Opdracht"] === task;
    })
    .map((grade) => {
      return parseInt(grade[typeOfGrade]);
    });
  const gradesTotal = assignmentToGet.reduce((a, b) => {
    return a + b;
  });
  return gradesTotal / assignmentToGet.length;
};

const overallAverage = (grade) => {
  const assignments = data.map((task) => {
    return task["Opdracht"];
  });
  const assignmentFilter = Array.from(new Set(assignments));
  const arrayWithAverages = assignmentFilter.map((task) => {
    return gradesAverage(task, grade);
  });
  return arrayWithAverages;
};

export default overallAverage;
