export default function FirstName({ dog }) {
  return (
    <>
      {dog.map((el) => {
        const { id, image } = el;
        return (
          <div key={id}>
            <img src={image} alt={id} />
          </div>
        );
      })}
    </>
  );
}
