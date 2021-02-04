import React from 'react'

export default ()=>{
    function clickHandler(){
        console.log('Message to functional component')
    }

    return(
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}