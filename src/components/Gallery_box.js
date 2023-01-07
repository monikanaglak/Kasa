import React, { useState } from "react";
import { Link } from "react-router-dom";
//single element, for each appartement
export function Box({ title, cover, id }) {
  return (
    <div className="one_appartment">
      <Link to={`/appartment/${id}`}>
        <img src={cover} className="photo_appartment"></img>
      </Link>
      <h4 className="title_appartment">{title}</h4>
    </div>
  );
}
