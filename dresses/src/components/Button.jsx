export default function Button({ handleClick }) {
  return (
    <div className="cont">
      <button onClick={() => handleClick("Dress")} className="btn">
        Dresses
      </button>
      <button onClick={() => handleClick("Pants")} className="btn">
        Pants
      </button>
      <button onClick={() => handleClick("Shoes")} className="btn">
        Shoes
      </button>
      <button onClick={() => handleClick("Shirt")} className="btn">
        Shirts
      </button>
      <button onClick={() => handleClick("Skirt")} className="btn">
        Skirts
      </button>
    </div>
  );
}
