import data from "./studentdata.json";

const assignmentStudent = (task, type) => {
  const newAssignmentArray = data
    .filter((item) => {
      return item["Opdracht"] === task;
    })
    .map((item) => {
      return item[type];
    });
  return newAssignmentArray;
};

export default assignmentStudent;
