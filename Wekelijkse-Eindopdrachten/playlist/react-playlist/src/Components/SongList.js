import React from "react";

function SongList(props) {
  console.log(props);

  return (
    <div className="songList">
      <h2>{props.songs.artist}</h2>
      <p>
        {props.songs.title} {props.songs.genre} {props.songs.rating}
      </p>
    </div>
  );
}
export default SongList;
