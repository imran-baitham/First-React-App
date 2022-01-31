import "./card.css";

export let Card = (props) => {
  //   let classes = "card" + props.className;
  return <div className="card">{props.children}</div>;
};
