import React, {Component} from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component{
    constructor(props){
        console.log('Run on ComponentA constructor')
        super(props)

        this.state={
            stateA:'inicial'
        }
    }

    componentDidMount(){
        console.log('Run on ComponentA didMount', this.state.stateA)
        this.setState({
            stateA: 'modificado'
        }, () => console.log('Run on ComponentA didMount', this.state.stateA))
        
    }

    render(){
        console.log('Run on ComponentA render')
        return(
            <>            
                <h1>ComponentA {this.state.stateA}</h1>
                <ComponentB/>
            </>
        )
    }
}

export default ComponentA