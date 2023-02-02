import React, { useState } from "react";
import "./Dictionarysearch.css";
import axios from "axios";
import Searchresult from "./Searchresult";
import Displayphotos from "./Displayphotos";
export default function Dictionarysearch(props) {
  let [keyWord, setkeyWord] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
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
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function showResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
    let pexelsApiKey =
      "nuiuhRR2FgTUY878rxVDP6k4T4IxjFEOAvvaN3kTmCDSwNnhWMElCAoh";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=12`;
    let authorizationHeader = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: authorizationHeader })
      .then(handlePexelsResponse);
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
            suggested keywords: flowers, book, wind, city etc....
          </div>
        </section>
        <Displayphotos photos={photos} />
        <Searchresult results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
