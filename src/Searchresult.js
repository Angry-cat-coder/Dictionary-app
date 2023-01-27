import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Searchresult(props) {
  if (props.results) {
    return (
      <div className="Searchresult">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
