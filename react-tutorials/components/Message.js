import React, {Component} from 'react'

class Message extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Welcome visitor"
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you to subscribe'
        })
    }

    render(){
       return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMessage()}}>subscribe</button>
            </>
       ) 
    }
}

export default Message