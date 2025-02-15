import React from 'react';

const Vote =({name,age}) =>{

    return(
        <div>
            <h1>
                {age > 18 ? <h3> {name} can vote.</h3> : <h3> You can't vote.</h3>}
            </h1>
            <h2> {age > 21 ? <h2> You Can Drive.</h2> : <h2> You Can't Drive.</h2>}</h2>

        </div>

    );
};

export default Vote;