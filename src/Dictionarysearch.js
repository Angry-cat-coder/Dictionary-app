import React, { useState } from "react";
import "./Dictionarysearch.css";
export default function Dictionarysearch() {
  let [keyWord, setkeyWord] = useState(" ");
  function search(event) {
    event.preventDefault();
    alert(`Sarching for ${keyWord} definition`);
  }
  function showKeyword(event) {
    setkeyWord(event.target.value);
  }
  return (
    <div className="Dictionarysearch">
      "Hello"{" "}
      <form onSubmit={search}>
        {" "}
        <input type={search} onChange={showKeyword} />
      </form>
    </div>
  );
}
