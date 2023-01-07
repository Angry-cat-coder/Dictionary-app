import React, { useState } from "react";
import "./Dictionarysearch.css";
import axios from "axios";
export default function Dictionarysearch() {
  let [keyWord, setkeyWord] = useState(" ");
  function search(event) {
    event.preventDefault();
    alert(`Sarching for ${keyWord} definition`);
    let upiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(upiUrl).then(showResponse);
  }
  //https://dictionaryapi.dev/
  function showKeyword(event) {
    setkeyWord(event.target.value);
  }
  function showResponse(response) {
    console.log(response.data);
  }
  return (
    <div className="Dictionarysearch">
      "Hello"{" "}
      <form onSubmit={search}>
        {" "}
        <input type="search" onChange={showKeyword} />
      </form>
    </div>
  );
}
