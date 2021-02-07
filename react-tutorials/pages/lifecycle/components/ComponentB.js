import React, {PureComponent} from 'react'

class ComponentB extends PureComponent{
    constructor(props){
        console.log('Run on ComponentB constructor')
        super(props)

        this.state={
            state:'inicial'
        }
    }

    componentDidMount(){
        console.log('Run on ComponentB didMount', this.state.state)        
    }

    render(){
        console.log('Run on ComponentB render')
        return(
            <h1>ComponentB {this.state.state}</h1>
        )
    }
}

export default ComponentB