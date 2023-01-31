import React, { useState } from "react";
import "./Dictionarysearch.css";
import axios from "axios";
import Searchresult from "./Searchresult";
export default function Dictionarysearch(props) {
  let [keyWord, setkeyWord] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  //https://dictionaryapi.dev/
  function showKeyword(event) {
    setkeyWord(event.target.value);
  }
  function search() {
    let upiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(upiUrl).then(showResponse);
  }
  function showResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionarysearch">
        <section>
          <form onSubmit={handleSubmit}>
            {" "}
            <input
              type="search"
              onChange={showKeyword}
              defaultValue={props.defaultKeyword}
            />
          </form>{" "}
          <div className="Hint">
            suggested keywords: literature, book, wind, city etc....
          </div>
        </section>
        <Searchresult results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
