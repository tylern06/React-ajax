import React, { Component } from "react";
import ItemService from "./ItemService";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
    this.addItemService = new ItemService();
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    // alert(this.state.item);
    event.preventDefault();
    //Service or Factory
    this.addItemService.sendData(this.state.item, this.props.history);
    this.setState({ item: "" });
    // this.props.history.push("/items");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Item:
            <input
              type="text"
              name="item"
              value={this.state.item}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default AddItem;
