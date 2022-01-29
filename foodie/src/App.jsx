import Button from "./components/Button";
import Slider from "./components/Slider";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="header">Try Our Amazing Desserts</h1>
      <div className="container">
        <div className="containerSlider">
          <Slider />
          <Button text={"Delete All"} />
        </div>
      </div>
    </div>
  );
}

export default App;
