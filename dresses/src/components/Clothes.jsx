export default function Clothes({ info }) {
  return (
    <div className="products">
      {info.map((el, index) => {
        const { name, searchTerm, price, image } = el;
        return (
          <div className="product-card" key={index}>
            <img src={image} alt={name} width="400px" height="500px" />
            <h3>{name}</h3>
            <h4>{searchTerm}</h4>
            <h4>${price}</h4>
          </div>
        );
      })}
    </div>
  );
}
