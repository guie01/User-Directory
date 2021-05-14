import React from "react";
import "./style.css";

function SearchBox(props) {
  return <input type = "text" onChange={(event) => {props.onChange(event)}}></input>;
  
}

export default SearchBox;
