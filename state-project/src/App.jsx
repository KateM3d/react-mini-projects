import { useState } from "react";
import { data } from "./data";
import "./App.css";

export default function App() {
  const [gifts, setGifts] = useState(data);

  const handleItemDelete = (id) => {
    const newArray = gifts.filter((gift) => gift.id !== id);
    setGifts(newArray);
  };

  console.log(gifts);
  return (
    <div className="container">
      <h1>List of {gifts.length} gifts</h1>
      <div>
        {gifts.map((element, index) => {
          const { id, gifty, image } = element;
          return (
            <div className="container" key={index}>
              <h2>
                {id}-{gifty}
              </h2>

              <img src={image} alt="img" width="250px" />
              <button onClick={() => handleItemDelete(id)}>Remove</button>
            </div>
          );
        })}
        <div className="container">
          <button onClick={() => setGifts([])}>Delete All</button>
        </div>
      </div>
    </div>
  );
}
