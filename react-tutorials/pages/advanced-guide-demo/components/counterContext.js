import React, { Component } from  'react'

const CounterContext = React.createContext(0)

class CounterProvider extends Component{
    constructor({children}){
        super(children)

        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount(){
        this.setState(
            currentState=>{
                return {count: currentState.count + 1}
            }
        )
    }

    render() {
        const { children } = this.props
        const { count } = this.state
        const { incrementCount } = this
    
        return (
          <CounterContext.Provider
            value={{
                count,
                incrementCount,
            }}
          >
            {children}
          </CounterContext.Provider>
        )
    }
}

export const CounterConsumer = CounterContext.Consumer

export default CounterContext
export {CounterProvider}