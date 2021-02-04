import React, {Component} from 'react'

export class EventBinding extends Component{
    constructor(){
        super()
        this.state ={
            message:'Hello'
        }
        /* this.clickHandler = this.clickHandler.bind(this) */
    }

/*     clickHandler(){
        this.setState({message:'Bye'})
    } */

    clickHandler = ()=>{
        this.setState({message:'Bye'})
    }

    render(){
        const {message} = this.state
        return(
            <div>
                <p>{message}</p>
                <button onClick={this.clickHandler}>Say goodbye</button>
                {/* <button onClick={this.clickHandler.bind(this)}>Say goodbye</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Say goodbye</button> */}
            </div>
        )
    }
}