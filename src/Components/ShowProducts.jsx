import React from 'react'

const ShowProducts = () => {
    let products =[
        {id: 1, title: "Keypad phone", price: 2500},
        {id: 2, title: "SmartPhone", price: 25000},
        {id:3, title:"FoldingPhone", price: 150000},
    ]
  return (
    <div>
        {products.map((data)=>(
            <div key={data.id}>
                <h1>Title = {data.title}</h1>
                <h1>Price = {data.price}</h1>
            </div>
        ))}
    </div>
  )
}

export default ShowProducts