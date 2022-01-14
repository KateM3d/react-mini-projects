import { Component } from "react";
import Swal from "sweetalert2";
import "./GroceryList.scss";
import check from "./check.png";
export class GroceryList extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      groceryList: [],
    };
  }
  handleChangeInput(e) {
    this.setState({
      userInput: e,
    });
  }
  handleAddItem(input) {
    if (input === "") {
      this.setState({ userInput: "" });
      Swal.fire({
        title: "Error!",
        text: "Please enter something",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({ userInput: "", groceryList: listArray });
    }
  }

  handleCrossWord(e) {
    const word = e.target;
    word.classList.toggle("crossed");
  }
  handleDeleteAll() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({ groceryList: listArray });
  }
  handleFormSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What would you like to buy?"
              value={this.state.userInput}
              onChange={(e) => this.handleChangeInput(e.target.value)}
            />
          </div>
          <div className="container">
            <button
              className="btn btn-add"
              onClick={() => this.handleAddItem(this.state.userInput)}
            >
              Add
            </button>
          </div>
          <ul>
            {this.state.groceryList.map((el, index) => (
              <li onClick={this.handleCrossWord} key={index}>
                <img src={check} alt="icon" />
                {el}
              </li>
            ))}
          </ul>
          <div className="container">
            <button
              className="btn btn-delete"
              onClick={() => this.handleDeleteAll(this.state.userInput)}
            >
              Delete
            </button>
          </div>
        </form>
      </>
    );
  }
}
