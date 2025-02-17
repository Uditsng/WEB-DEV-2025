import React from "react";
import SayHello from "./Components/SayHello";
import Product from "./Components/Product";
import Products2 from "./Components/Products2";
import Person from "./Components/Person";
import Vote from "./Components/Vote";
import Laptop from "./Components/Laptop";
import Events from "./Components/Events";
import Counter from "./Components/Counter";
import Counter2 from "./Components/Counter2";
import ShowProducts from "./Components/ShowProducts";
import FilterProducts from "./Components/FilterProducts";
import UseEffect_Uses from "./Components/UseEffect_Uses";
import form from "./Components/form";

const App = () => {
  
  return (
    <>
      <div>
        {/* <SayHello/>
    <Product/> */}
        {/* <Products2
      brand="IQOO"
      name="Z5"
      price="25000"
      storage="256GB"
    />
    <br />

    <Products2
     brand="Realme"
     name="8 Pro"
     price="16000"
     ram="8GB"
     >  
    </Products2>
    
     */}
      </div>
      <div>
        {/* <Person
      name="Udit"
      age="21"
      contact="udityrr@gmail.com"
    /> */}
      </div>
      <div>{/* <Vote name="udit" age="21"/> */}</div>
      <div>
        {/* <Laptop
        brand="HP"
        model="Victus"
        specs="16,256GB"
      />
      <Laptop
        brand="HP"
        model="SlimBook"
        specs="32,512GB"
      /> */}
      </div>
      <div>{/* <Events/> */}</div>
      <div>
        {/* <Counter/> */}
        {/* <Counter2/> */}
      </div>
      <div>
        {/* <ShowProducts/> */}
        {/* <FilterProducts/> */}
      </div>
      <div>
        {/* <UseEffect_Uses/> */}
      </div>
      <div>
        <form/>
      </div>
    </>
  );
};

export default App;
