import React, { useState } from "react";
import "./Dictionarysearch.css";
import axios from "axios";
import Searchresult from "./Searchresult";
export default function Dictionarysearch() {
  let [keyWord, setkeyWord] = useState(" ");
  let [result, setResult] = useState(null);
  function search(event) {
    event.preventDefault();

    let upiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(upiUrl).then(showResponse);
  }
  //https://dictionaryapi.dev/
  function showKeyword(event) {
    setkeyWord(event.target.value);
  }
  function showResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  return (
    <div className="Dictionarysearch">
      <section>
        <form onSubmit={search}>
          {" "}
          <input type="search" onChange={showKeyword} />
        </form>{" "}
      </section>
      <Searchresult results={result} />
    </div>
  );
}
