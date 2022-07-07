import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleOnClick2 = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("clear text", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleOnClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnClick2}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearText}>
          Clear text
        </button>
        <div className="container my-3">
          <h1>Your text summary.</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
        </div>
      </div>
    </>
  );
}
