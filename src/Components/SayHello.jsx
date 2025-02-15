import React from 'react'

const SayHello = () => {
    const sayHello = (name) => `hello, ${name}!`;   {/** Js logic here only */}
    const person = {
      id : 123,
      age : 30,
      gender : "male"
                   }
  return (
    <>
    <div>
      <h1>Hey, brilliant boy</h1>               {/** html code */}
      <h4>Add 5 and 8 = {5+8}</h4>              {/** JS code */}
      <h2>{sayHello("udit")}</h2>
      <h3>{`Id is ${person.id}`}</h3>
    </div>
    </>
  )
}

export default SayHello