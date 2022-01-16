import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrementClick() {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className="container">
      <p className="container_count">{count} times</p>
      <div className="container_count_btn">
        <button className="btn" onClick={handleDecrementClick}>
          Dislike
        </button>
        <button className="btn" onClick={handleIncrementClick}>
          Like
        </button>
      </div>
    </div>
  );
}
