import React from "react";
import Axios from "axios";
import FilmItem from "./FilmItem.js";
import "./Film.css";

class Film extends React.Component {
  constructor() {
    super();
    this.cancelToken = Axios.CancelToken.source();
    this.state = { movies: false, message: "Loading..." };
  }
  render() {
    if (this.state.movies) {
      let moviesList = this.state.movies.map(function(key, index) {
        return <FilmItem key={index} movies={key} />;
      });
      return (
        <div>
          <ul className="movies-list">
            {moviesList}
          </ul>
        </div>
      );
    } else {
      return (
        <h1>
          {this.state.message}
        </h1>
      );
    }
  }
  componentDidMount() {
    Axios.get("http://swapi.co/api/films/", {
      cancelToken: this.cancelToken.token
    })
      .then(data => {
        // console.log("data", data.data.results);
        this.setState({
          movies: data.data.results
        });
      })
      .catch(error => {
        if (Axios.isCancel(error)) {
          console.log("axios error", error);
        } else {
          this.setState({
            message: "Movies not found"
          });
        }
      });
  }
  componentWillUnmount() {
    this.cancelToken.cancel("Operation canceled by the user");
  }
}

export default Film;
