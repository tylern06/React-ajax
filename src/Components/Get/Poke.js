import React, { Component } from "react";
import Axios from "axios";
// import "./Poke.css";
class Poke extends Component {
  constructor(props) {
    super(props);
    //token to cancel request to API
    this.cancelToken = Axios.CancelToken.source();
    this.state = { pokemon: false, message: "Loading..." };
  }
  render() {
    if (this.state.pokemon) {
      return (
        <div>
          <h1>
            {this.state.pokemon.name}
          </h1>
          <img src={this.state.pokemon.sprites.front_shiny} alt="" />
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
    Axios.get("http://pokeapi.co/api/v2/pokemon/" + this.props.id, {
      cancelToken: this.cancelToken.token
    })
      .then(result => {
        this.setState({
          pokemon: result.data
        });
      })
      .catch(error => {
        console.log("error", error);
        if (Axios.isCancel(error)) {
          console.log("axios error", error);
        } else {
          this.setState({
            message: `Pokemon with ID '${this.props.id}' not found`
          });
        }
      });
  }

  //cancel API request when component is removed from the DOM
  componentWillUnmount() {
    this.cancelToken.cancel("Operation canceled by the user");
  }
}
export default Poke;
