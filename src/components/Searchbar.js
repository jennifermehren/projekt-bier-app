// import { useState } from "react";

const Searchbar = (props) => {
  
  return (
    <div className="searchbar-container">
      <figure className="searchbar">
        <input   onInput={e => props.search(e.target.value.toLowerCase())}
          className="input"
          type="text"
          name="searchfield"
          placeholder="search beer"
        ></input>
      </figure>
    </div>
  );
};

export default Searchbar;
