import React from 'react'

// function Greet () {
//     return <h1>Hello Edson</h1>
// }

const Greet = (props) =>{
    return(
        <>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </>
    )
}

export default Greet