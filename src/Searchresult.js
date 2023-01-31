import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Searchresult.css";
export default function Searchresult(props) {
  if (props.results) {
    return (
      <div className="Searchresult">
        <section>
          <h2>
            {" "}
            <em>{props.results.word}</em>
          </h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
