import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    info: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts ").then((result) => {
      const info = result.data;
      console.log(result.data);
      this.setState({ info });
      console.log(info);
    });
  }
  render() {
    return (
      <div>
        {this.state.info.map((el, index) => {
          return (
            <p key={index}>
              {el.title}
              <span>{el.body}</span>
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
