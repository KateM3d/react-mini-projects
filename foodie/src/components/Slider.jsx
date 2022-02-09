import { useState } from "react";
import { data } from "../data";
import Button from "./Button";

export default function Slider() {
  const [list, setList] = useState(data);
  const [count, setCount] = useState(0);
  const [itemsAdd, setItemsAdd] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(1);

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

  const handleButtonAdd = () => {
    const newItem = list[count].name;
    console.log(newItem);
    console.log(itemsAdd);
    const duplicateItemCheck = itemsAdd.includes(newItem);

    if (duplicateItemCheck) {
      return itemsAdd.forEach(
        (el) => el === newItem && setNumberOfItems((prevCount) => prevCount + 1)
      );
    } else {
      setItemsAdd([...itemsAdd, newItem]);
    }
  };
  const handleRemoveAllClick = () => {
    setItemsAdd([]);
    setNumberOfItems(1);
  };

  const handleItemRemove = (item) => {
    console.log(item);
    const newList = itemsAdd.filter((el) => el !== item);
    setItemsAdd(newList);
  };

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
              <Button text={"Add"} handleClick={() => handleButtonAdd()} />
            </div>
          </div>
          <Button handleClick={handleIncrementClick} text={"Next"} />
        </div>
      </div>
      <div className="containerList">
        <h2>Your Basket:</h2>

        <ul>
          {itemsAdd.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  {numberOfItems} {item}
                </span>
                <button
                  onClick={() => handleItemRemove(item)}
                  className="btnRemoveEach"
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
        <Button handleClick={handleRemoveAllClick} text={"Remove All"} />
      </div>
    </>
  );
}
