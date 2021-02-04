import React from 'react'

export default (props)=>{
    return (
        <div>
            <button onClick={()=>{props.greetHandler('child')}}>Greet parent</button>
        </div>
    )
}