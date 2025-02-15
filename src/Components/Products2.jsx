import React from 'react'

         {/** Destructuring the props */}

const Products2 = ({brand,name,price,ram,storage}) => {

  return (
    <>

    {/** Props enables to create usable components */}

    <h3>Product RAM : {ram}</h3>
    <h3>Storage :  {storage}</h3>
    <h3>Product Price : {price}</h3>
    <h3>Product Brand : {brand}</h3>
    <h3>Product Name : {name}</h3>
    </>
  )
}

export default Products2