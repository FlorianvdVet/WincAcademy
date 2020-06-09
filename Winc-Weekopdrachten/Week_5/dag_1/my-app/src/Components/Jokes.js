import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div className="joke">
      <h2 style={{ display: !props.question && "none" }}>
        Question: {props.question}
      </h2>
      <h3 style={{ color: !props.question && "blue" }}>
        Answer: {props.answer}
      </h3>
      <hr />
    </div>
  );
}

export default Joke;
