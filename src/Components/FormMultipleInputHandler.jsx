import React from "react";
import Reacr, {useState} from 'react'

const FormMultipleInputHandler = () => {

   const [FormData, setFormData] = useState({
    name:"",
    age:"",
    contact:"",
    password:"",
    email:"",
    address:"",
   })

   // func to handle input changes
   const onChangeHandler =(data) =>{
    const {name,value} = data.target
    setFormData({...FormData,[name]:value})
   }


   //func to handle submission
    const handleSubmit = (data)=> {
       data.preventDefault()
       alert("Your form has been submitted")

       console.lof(FormData)
       
// clear the input field after submission
       setFormData({
        name:"",
        age:"",
        contact:"",
        password:"",
        email:"",
        address:"",
       })

    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          Name : <input type="text" value={FormData.name} onChange={onChangeHandler} name="name" />
        </div>
        <div>
          Age : <input type="number" value={FormData.age} onChange={onChangeHandler} name="age" />
        </div>
        <div>
          Contact : <input type="number" value={FormData.contact} onChange={onChangeHandler} name="contact" />
        </div>
        <div>
          Password : <input type="password" value={FormData.password} onChange={onChangeHandler} name="password" />
        </div>
        <div>
          Email : <input type="email" value={FormData.email} onChange={onChangeHandler} name="email" />
        </div>
        <div>
          Address : <input type="text" value={FormData.address} onChange={onChangeHandler} name="address" />
        </div>
        
        <button> Submit </button>
      </form>
    </div>
  );
};

export default FormMultipleInputHandler;
