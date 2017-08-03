import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Get from "./Components/Get/Get.js";
import Film from "./Components/Get/Film.js";
import Post from "./Components/Post/Post.js";
import AddItem from "./Components/Add/AddItem.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* Render component base on route initialized from Link component */}
          <Route exact path="/" component={Get} />
          <Route path="/film" component={Film} />
          <Route path="/post" component={Post} />
          <Route path="/add-item" component={AddItem} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
