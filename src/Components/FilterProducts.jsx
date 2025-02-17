import React from 'react'

const FilterProducts = () => {
    const products = [
        {id:1, title:"Samsung",type:"mobile", price:200220},
        {id:2, title:"Sony", type:"camera", price: 250000},
        {id:3, title:"Ola", type:"scooter", price:2000},
        {id:4, title:"Kodak", type:"camera", price: 588800},
    ]
    const FilteredData = products.filter((data)=> data.type == 'camera')
    console.log(FilteredData)
    
  return (
    <div>
        {FilteredData.map((data)=><div
            key={data.id}>
                <h1>{data.title}</h1>
                <h1>{data.price}</h1>
                <h1>{data.type}</h1>
        </div>)}
    </div>
  )
}

export default FilterProducts