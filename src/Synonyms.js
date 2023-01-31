import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length) {
    return (
      <ul className="Synonyms">
        <strong>Synonym: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <li>{synonym} </li>
            </span>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
