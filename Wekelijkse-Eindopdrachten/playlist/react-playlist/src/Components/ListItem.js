import React from "react";

const ListItem = (props) => {
  return (
    <tr>
      <td>{props.item.title}</td>
      <td>{props.item.artist}</td>
      <td>{props.item.genre}</td>
      <td>{props.item.rating}</td>
      <td>
        <button
          className="button"
          onClick={props.deleteSong}
          name={props.item.title}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
