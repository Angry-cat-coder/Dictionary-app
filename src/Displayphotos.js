import React from "react";
import "./Displayphotos.css";
export default function Displayphotos(props) {
  if (props.photos) {
    return (
      <section className="Displayphotos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
