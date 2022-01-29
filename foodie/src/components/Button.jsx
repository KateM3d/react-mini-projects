export default function Button(props) {
  console.log(props);
  return (
    <button onClick={props.handleClick} className="btn">
      {props.text}
    </button>
  );
}
