import React from "react";
// import "./style.css";

function KeanuCard(props) {
  return (
    <div>
      <img alt={props.name} src={props.image} />
    </div>
  );
}
export default KeanuCard;
