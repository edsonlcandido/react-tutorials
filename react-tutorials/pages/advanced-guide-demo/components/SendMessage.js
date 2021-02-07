import React, {Component} from 'react'
import CounterContext from './counterContext'

class SendMessage extends Component{
    static contextType = CounterContext

    constructor(){
        super()
    }

    render(){
        const { incremenCount } = this.context
        return(
            <button onClick={() => incremenCount()}>Send new message</button>
        )
    }
}

export default SendMessage