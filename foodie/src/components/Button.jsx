export default function Button(props) {
  return (
    <button onClick={props.handleClick} className="btn">
      {props.text}
    </button>
  );
}
