import React from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
  const arr =[
    {id:'MERN01', course_name:'Mern_Stack',price:2500, duration:'5 month'},
    {id:'JAVA02',course_name:'Java_Full_Stack',price:3000,duration:'1year'},
    {id:'PYTHON03',course_name:'Python_Full_Stack',price:1500, duration:'5 months'},
  ]
  return (
    <div>
      <ul>
        {arr.map((data)=><div key={data.id}>
          <li>
            <Link to={`/Courses/${data.id}`}>{data.course_name}
            </Link>{" "}
          </li>
          </div>)}
      </ul>
    </div>
  )
}

export default Products