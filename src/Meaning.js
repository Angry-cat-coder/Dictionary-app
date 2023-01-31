import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>
        {" "}
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {" "}
            <p>
              <strong>Definition: </strong> {definition.definition}
            </p>
            <Example example={definition.example} /> <br />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} /> <br />
    </div>
  );
}
