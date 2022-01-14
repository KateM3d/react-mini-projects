import "./App.scss";
import image from "./shopping.jpg";
import man from "./man.jpg";
import { GroceryList } from "./components/GroceryList";

function App() {
  return (
    <div className="app">
      <img src={image} alt="shopping" width="250px" />
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={man} alt="man" width="250px" />
      </div>
    </div>
  );
}

export default App;
