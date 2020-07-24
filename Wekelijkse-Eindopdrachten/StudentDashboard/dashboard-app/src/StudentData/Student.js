import data from "./studentdata.json";

const studentArray = (name, value) => {
  const singleStudent = data
    .filter((student) => {
      return student["Naam"] === name;
    })
    .map((task) => {
      return task[value];
    });
  return singleStudent;
};

export default studentArray;
