import React from "react";

function ListItem(props) {
  return (
    <li className="list-item" key={props.id} value={props.title}>
      {props.item.title}
    </li>
  );
}

export default ListItem;
