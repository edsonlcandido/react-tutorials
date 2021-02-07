import React, {Component} from 'react'
import {CounterProvider} from './counterContext'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    increment = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const {increment} = this
        const {count} = this.state
        return(
            <CounterProvider value={increment, count}>
                {children}
            </CounterProvider>         
        )
    }
}

export default Counter