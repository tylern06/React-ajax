import React from "react";

class FilmItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.movies);
    this.state = { movies: this.props.movies };
  }
  render() {
    return (
      <li>
        <h1>
          {this.state.movies.title}
        </h1>
        <p>
          {this.state.movies.opening_crawl}
        </p>
      </li>
    );
  }
}

export default FilmItem;
