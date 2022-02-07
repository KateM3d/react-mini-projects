import Slider from "./components/Slider";
import List from "./components/List";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="header">Try Our Amazing Desserts</h1>
      <div className="container">
        <Slider />
        {/* <Button text={"Delete All"} /> */}

        {/* <List /> */}
      </div>
    </div>
  );
}

export default App;
