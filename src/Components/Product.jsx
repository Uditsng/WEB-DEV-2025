import React from 'react'

const Product = () => {
    const obj = {
        brand : "Samsung",
        product : "S25 Ultra",
        price : 88000
    }
  return (
    <>
    <h2>Mobile Brand : {obj.brand}</h2>
    <h2>{`Product Series : ${obj.product}`}</h2>
    <h2>Product Price : {obj.price}</h2>
    </>
  )
}

export default Product