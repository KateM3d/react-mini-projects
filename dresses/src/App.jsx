import { useState } from "react";
import { data } from "./data";
import "./App.css";
import FirstName from "./FirstName";

export default function App() {
  const [image, setImage] = useState(data);
  return (
    <div>
      <FirstName dog={image} />
    </div>
  );
}
