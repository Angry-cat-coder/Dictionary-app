import React from "react";
export default function Example(props) {
  console.log(props.example);
  if (props.example) {
    return <div className="Example fst-italic">Example: {props.example};</div>;
  } else {
    return null;
  }
}
