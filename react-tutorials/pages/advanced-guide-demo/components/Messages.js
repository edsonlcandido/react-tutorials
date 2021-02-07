import React, {Component} from 'react'
import CounterContext from './counterContext'

class Messages extends Component{
    static contextType = CounterContext
    constructor(){
        super()
    }

    render(){
        const { count } = this.context
        return(
            <p>Messages: {count}</p>            
        )
    }
}

export default Messages