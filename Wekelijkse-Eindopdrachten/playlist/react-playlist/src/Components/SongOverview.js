import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          title: "My Rifle, My Pony and Me",
          artist: "Dean Martin",
          genre: "Country",
          rating: "4",
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  addSong(song) {
    song.preventDefault();
    const newSong = {
      title: song.target.title.value,
      artist: song.target.artist.value,
      genre: song.target.genre.value,
      rating: song.target.rating.value,
    };
    console.log(newSong);
    this.setState((prevState) => {
      let updateList = prevState.songs.concat(newSong);
      console.log(updateList);
      return {
        songs: updateList,
      };
    });
  }

  deleteSong(song) {
    const songToDelete = song.target.title;
    this.setState((prevState) => {
      let updatedList = prevState.songs;
      console.log(updatedList);
      let IndexOf = updatedList.indexOf(songToDelete);
      console.log(IndexOf);
      updatedList.splice(
        updatedList.indexOf((item) => item.title === songToDelete),
        1
      );
      console.log(updatedList);
      return { songs: updatedList };
    });
  }

  render() {
    return (
      <div>
        <h1>Personal playlist maker deluxe</h1>
        <SongForm addSong={this.addSong} />
        <table style={{ width: "100%" }}>
          <tr class="song-header">
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
            <th></th>
          </tr>
          <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
        </table>
      </div>
    );
  }
}

export default SongOverview;
