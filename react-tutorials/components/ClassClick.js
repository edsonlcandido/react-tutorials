import React, {Component} from 'react'

class ClassClick extends Component{
    constructor(){
        super()
    }
    clickHandler(){
        console.log('click from a class component')
    }
    render(){
       return(
        <div>
            <button onClick={this.clickHandler}>Click</button>
        </div>
       ) 
    }
}

export default ClassClick