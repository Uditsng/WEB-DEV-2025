import React from 'react'
import { useParams,Link, useLocation } from 'react-router-dom'

const Course_details = () => {
  console.log(useLocation())
    const arr =[
        {id:'MERN01', course_name:'Mern_Stack',price:2500, duration:'5 month'},
        {id:'JAVA02',course_name:'Java_Full_Stack',price:3000,duration:'1year'},
        {id:'PYTHON03',course_name:'Python_Full_Stack',price:1500, duration:'5 months'},
      ]
    const {id} =useParams()
    const location = useLocation()
    const Course_details = arr.filter((data)=>data.id==id)
  return (
   <>
   <div>
        <h1>Course ID ={id}</h1>
        <h1>Course Name = {Course_details[0].course_name}</h1>
        {location.pathname != "/Courses/PYTHON03" && (
          <>
          <h1>Duration = {Course_details[0].duration}</h1>
          <h1>Price = {Course_details[0].price}</h1>
          </>
        )}
        
    </div>
    <button><Link to={'/Courses'} style={{textDecoration:"none", color:"black",}} >All Course</Link> </button>

    </>
  )
}

export default Course_details