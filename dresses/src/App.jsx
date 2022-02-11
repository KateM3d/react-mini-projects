import { useState } from "react";
import { data } from "./data";
import "./App.css";
import Clothes from "./Clothes";
import Button from "./Button";

export default function App() {
  const [clothes, setSlothes] = useState(data);

  const sortedClothes = (searchTerm) => {
    const newClothes = data.filter((el) => el.searchTerm === searchTerm);
    setSlothes(newClothes);
  };

  return (
    <div>
      <div className="cont">
        <h2 className="back">Free Standard Shipping</h2>
      </div>
      <Button handleClick={sortedClothes} />
      <Clothes info={clothes} />
    </div>
  );
}
