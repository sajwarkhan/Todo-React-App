import React, { useState } from "react";

function Todoinputbox(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box"
        placeholder="Write your text here"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="click-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
      {/* <div>{inputText}</div> */}
    </div>
  );
}

export default Todoinputbox;
