import React, {useState} from 'react'

const FormMultipleInputHandler = () => {

  const [formData, setFormData] = useState({
    name:"",
    age:"",
    contact:"",
    password:"",
    email:"",
    address:"",
   })

 // func to handle input changes
   const onChangeHandler =(e) =>{  //e short of event handler
    setFormData({...formData,[e.target.name]:e.target.value})
   }


 //func to handle submission
    const handleSubmit = (e)=> {
       e.preventDefault()
       alert("Your form has been submitted")

       console.log(formData)
       
       // reset the input field after submission
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
          Name : <input type="text" value={formData.name} onChange={onChangeHandler} name="name" />
        </div>
        <div>
          Age : <input type="number" value={formData.age} onChange={onChangeHandler} name="age" />
        </div>
        <div>
          Contact : <input type="number" value={formData.contact} onChange={onChangeHandler} name="contact" />
        </div>
        <div>
          Password : <input type="password" value={formData.password} onChange={onChangeHandler} name="password" />
        </div>
        <div>
          Email : <input type="email" value={formData.email} onChange={onChangeHandler} name="email" />
        </div>
        <div>
          Address : <input type="text" value={formData.address} onChange={onChangeHandler} name="address" />
        </div>
        
        <button type='submit'> Submit </button>
      </form>
    </div>
  );
};

export default FormMultipleInputHandler;
