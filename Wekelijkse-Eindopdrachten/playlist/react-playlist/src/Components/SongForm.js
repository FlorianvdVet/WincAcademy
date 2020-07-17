import React from "react";

const SongForm = (props) => {
  return (
    <form onSubmit={props.addSong}>
      Title:
      <input type="text" name="title" placeholder="Song title" />
      Artist:
      <input type="text" name="artist" placeholder="Artist" />
      Genre:
      <input type="text" name="genre" placeholder="Genre" />
      Rating:
      <select type="text" name="rating" placeholder="Give a rating of 1-5">
        <option value="">Give a rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Add song</button>
    </form>
  );
};

export default SongForm;
