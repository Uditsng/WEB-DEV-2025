import React from "react";
import "./laptop.css";

const Laptop = ({ brand, model, specs }) => {
  {
    /** Internal Styling */
  }
  const obj = {
    backgroundColor: "royalblue",
    padding: "15px",
    margin: "10px",
    borderRadius: "20px",
    border: "3px solid purple",
  };
  return (
    <div
      //Inline styling

      // style={{
      //         backgroundColor: "red",
      //         padding: "10px 10px",
      //         borderRadius:"20px",
      //         border:"2px solid whitesmoke",
      //         margin:"10px",

      //            }}
      // style={obj}
      className="obj"
    >
      <h1>Brand: {brand}</h1>
      <h3>Model : {model}</h3>
      <h3>Specs : {specs}</h3>
    </div>
  );
};

export default Laptop;
