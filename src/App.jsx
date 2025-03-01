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
import Form from "./Components/Form";
import FormMultipleInputHandler from "./Components/FormMultipleInputHandler";
import Meal from "./Food_Recipe/Meal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //had made a mistake here
import Home from "./Pages/Home";
import About from "./Pages/About";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Course_details from "./Pages/Course_details";
import NavBar from "./Pages/NavBar";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";

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
      <div>{/* <UseEffect_Uses/> */}</div>
      <div>
        {/* <Form/> */}
        {/* <FormMultipleInputHandler/> */}
      </div>
      <div>{/* <Meal/> */}</div>
      
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/about" element={< About />} />
            <Route path="/teams" element={< Teams />} />
            <Route path="/contact" element={< Contact />} />
            <Route path="/courses" element={< Products />} />
            <Route path="/courses/:id" element={< Course_details/>} />
            <Route path="/dashboard" element={< Dashboard/>} /> 
            <Route path="/profile" element={< Profile/>} />
          </Routes>
        </Router>
      
    </>
  );
};

export default App;
