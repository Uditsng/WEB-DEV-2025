import React from "react";

const Person = ({ name, age, contact }) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1> Age : {age}</h1>
      <h1>Contact : {contact}</h1>
    </div>
  );
};

export default Person;
