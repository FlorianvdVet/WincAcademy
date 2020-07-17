import React from "react";
import ListItem from "./ListItem";

const SongList = (props) => {
  const newList = props.songs.map((item) => (
    <ListItem item={item} deleteSong={props.deleteSong} />
  ));
  return <>{newList}</>;
};
export default SongList;
