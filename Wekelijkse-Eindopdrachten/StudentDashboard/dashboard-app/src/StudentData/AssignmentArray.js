import data from "./studentdata.json";

const assignmentArray = data.map((task) => {
  return task["Opdracht"];
});
const newArrayAssignments = Array.from(new Set(assignmentArray));

export default newArrayAssignments;
