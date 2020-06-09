import React from "react";
import SongForm from "./Components/SongForm";
import SongList from "./Components/SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    this.setState((prevState) => {
      return {
        songs: prevState.songs.concat(song),
      };
    });
  };

  render() {
    console.log(this.state.songs);
    return (
      <div>
        <h1>Personal playlist maker deluxe</h1>
        <SongForm addSong={this.addSong} />
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongOverview;
