import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState((prevState)=>({
            count: prevState.count + 1
        }), ()=>{
            console.log(this.state.count)
        })

        /* this.setState({
                count: this.state.count + 1
            },()=>{
            console.log(this.state.count)
            }
        )     */    
        /* this.state.count = this.state.count + 1 */
    }

    incrementFive(){
        console.log('Before increment five')
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        const {count} = this.state
        return(
            <>
                <div>Counter - {count}</div>
                <button onClick={()=>this.incrementFive()}>Add +1</button>
            </>
        )
    }
}
export default Counter