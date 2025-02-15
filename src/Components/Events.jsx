import React from 'react'
const Events =()=>{
    const handleClick = () => {
        alert("Ohh! so, you have clicked.")
    };
    const addition =(a) =>{
        alert(a-19)
    }
    return(
<div> 
    {/* Don't click on the button */}
<button onClick={handleClick}>Click</button>
<button onMouseOver={()=>addition(2)} >Add</button>
</div>
    )
};

export default Events