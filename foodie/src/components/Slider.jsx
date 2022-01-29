import { useState } from "react";
import { data } from "../data";
import Button from "./Button";

export default function Slider() {
  const [list, setList] = useState(data);
  const [count, setCount] = useState(0);

  const handleDecrementClick = () => {
    if (count === 0) {
      setCount(data.length - 1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const handleIncrementClick = () => {
    if (count === data.length - 1) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  console.log(data[count].img);
  return (
    <>
      <div className="sliderInner">
        <div key={list[count].id} className="container">
          <Button handleClick={handleDecrementClick} text={"Back"} />
          <div className="containerSlider">
            <h3 className="name">{list[count].name}</h3>
            <img
              className="image"
              src={list[count].img}
              alt={`${list[count].name}`}
            />
            <p>{list[count].description}</p>
            <p>
              {count + 1}/{data.length}
            </p>
            <div className="container">
              <Button text={"delete"} />
            </div>
          </div>
          <Button handleClick={handleIncrementClick} text={"Next"} />
        </div>
      </div>
    </>
  );
}
