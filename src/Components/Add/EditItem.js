import React, { Component } from "react";
import axios from "axios";

class EditItem extends Component {
  constructor(props) {
    super(props);
    // console.log("edit props", props);
    this.state = { item: "" };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let updateUrl = "/items/update/" + this.props.match.params.id;
    axios
      .post(updateUrl, {
        item: this.state.item
      })
      .then(response => {
        console.log("update response ", response);
        this.setState({ item: response.data.data });
        this.props.history.push("/items");
      })
      .catch(err => {
        console.log("update err", err);
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4200/items/edit/" + this.props.match.params.id)
      .then(response => {
        console.log("response data", response.data);
        this.setState({ item: response.data.item });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Edit Item:
            <input
              type="text"
              name="item"
              value={this.state.item}
              className="form-control"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Update" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default EditItem;
