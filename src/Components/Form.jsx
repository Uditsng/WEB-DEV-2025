// allow to use JSX and other React feature
import React, { useState } from "react";

//functional component
const Form = () => {
  //state variables that stores the current values
  const [name, setName] = useState(""); // Holds the username.
  const [email, setEmail] = useState(""); // Holds the email.

  const handleSubmit = (e) => {

    e.preventDefault(); // to prevent default browser behaviour (i.e. reload page after submittion)

    alert("Your form has been submitted : Name- " +name +" " +", Email- " + email );

    // it clears the input form values on screen after submittion
    setName(""), setEmail("")
  
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <div id="inputField">
          UserName :{" "}
          <input
            value={name}
            //Event that displays the current values
            onChange={(e) => setName(e.target.value)} //onChange updates name state on user input
            type="text"
          />
          <h5>{name}</h5>
        </div>
        
        <div id="inputField">
          Email :{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>{email}</h5>
        </div>
        
        <div id="inputField">
          <button>Submit</button>
        </div>
      
      </form>
    </div>
  );
};

export default Form;


// when input values are very few, we use this kind of form otherwise in real-world application, we use Multiple_input_handling form.