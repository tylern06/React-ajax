import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { withRouter } from "react-router"; // further imports omitted

class TableRow extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleDelete = () => {
    console.log("delete ");
    axios
      .get("/items/delete/" + this.props.obj._id)
      .then(response => {
        console.log("Deleted", response);
        this.props.history.push("/items");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.item}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>

          {/* <Link to={"/edit/" + this.props._id}>Edit</Link> */}
          {/* <button className="btn btn-primary">Edit</button> */}
        </td>
        <td>
          <button onClick={this.handleDelete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;

// export default withRouter(TableRow);
