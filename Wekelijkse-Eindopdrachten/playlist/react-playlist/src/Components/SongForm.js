import React from "react";

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    this.props.addSong(this.state);
    event.preventDefault();
    console.log(this.props);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Title:
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Song title"
          onChange={this.handleChange}
        />
        Artist:
        <input
          type="text"
          name="artist"
          value={this.state.artist}
          placeholder="Artist"
          onChange={this.handleChange}
        />
        Genre:
        <input
          type="text"
          name="genre"
          value={this.state.genre}
          placeholder="Genre"
          onChange={this.handleChange}
        />
        Rating:
        <select
          type="text"
          name="rating"
          value={this.state.rating}
          placeholder="Give a rating of 1-5"
          onChange={this.handleChange}
        >
          <option value="">Give a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Add song</button>
        <h1>
          {this.state.title} {this.state.artist} {this.state.genre}{" "}
          {this.state.rating}
        </h1>
      </form>
    );
  }
}

export default SongForm;
