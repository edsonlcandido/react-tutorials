import React, { Component } from  'react'

class UserGreeting extends Component{
    constructor(){
        super()

        this.setState = {
            isLogged:true,
            userName:'Edson'
        }
    }

    render(){
/*         if (this.setState.isLogged) {
            return(
                <div>
                    <h1>Hello Edson</h1>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Hello guest</h1>
                </div>
            )
        } */

/*         let message
        if (this.setState.isLogged) {
            message = <h1>Hello Edson</h1>
        } else {
            message = <h1>Hello guest</h1>
        }
        return <>{message}</> */

/*         return this.setState.isLogged ? (
            <h1>Hello edson</h1>
        ) : (
            <h1>Hello guest</h1>
        ) */
        const {userName} = this.setState
        return this.setState.isLogged && <h1>Hello {userName}</h1>
    }
}


export default UserGreeting