import React, { Component } from "react"

const hero = {
    textRendering: "optimizeLegibility",
    textSizeAdjust: "100%",
    fontSize: "1rem",
    color: "#fff",
    boxSizing: "inherit",
    flexGrow: "1",
    flexShrink: "0",
    padding: "3rem 3rem",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#48c78e",
    minHeight: `calc(100vh - 6rem - 18rem)`,
    head:{
        fontWeight: "400",
        lineHeight: "1.5",
        fontSize: "1rem",
        color: "#fff",
        boxSizing: "inherit",
        flexGrow: "0",
        flexShrink: "0"
      },
    body:{
    fontSize: "1rem",
    color: "#fff",
    boxSizing: "inherit",
    flexGrow: "1",
    flexShrink: "0",
    padding: "4.5rem 3rem"
    },
    foot:{
        fontSize: "1rem",
        color: "#fff",
        boxSizing: "inherit",
        flexGrow: "0",
        flexShrink: "0"
      }
  }

const field ={
    color: "#4a4a4a",
    fontWeight: "400",
    lineHeight: "1.5",
    fontSize: "1rem",
    boxSizing: "inherit",
    marginBottom: ".75rem"
  }
const label ={
    boxSizing: "inherit",
    color: "#363636",
    display: "block",
    fontSize: "1rem",
    fontWeight: "700",
    marginBottom: ".5em"
  }

const control = {
    boxSizing: "border-box",
    clear: "both",
    fontSize: "1rem",
    position: "relative",
    textAlign: "inherit"
  }

const input = {
    border: "1px solid transparent",
    borderStyle:"solid",
    backgroundColor: "#fff",
    borderColor: "#dbdbdb",
    borderRadius: ".375em",
    color: "#363636",
    minWidth: `calc(100% - 1.25rem)`,
    maxWidth: `calc(100% - 1.25rem)`,
    paddingBottom: `calc(.5em - 1px)`,
    paddingLeft: `calc(.75em - 1px)`,
    paddingRight: `calc(.75em - 1px)`,
    paddingTop: `calc(.5em - 1px)`,
    position: "relative",
    verticalAlign: "top",
    justifyContent: "flex-start",
    lineHeight: "1.5",
    display: "inline-flex"
  }

const textarea = {
    alignItems: "center",
    border: "1px solid transparent",
    fontSize: "1rem",
    height: "2.5em",
    justifyContent: "flex-start",
    lineHeight: "1.5",
    position: "relative",
    verticalAlign: "top",
    backgroundColor: "#fff",
    borderColor: "#dbdbdb",
    borderRadius: ".375em",
    color: "#363636",
    boxShadow: "inset 0 .0625em .125em rgba(10,10,10,.05)",
    width: `calc(100% - 1.25rem)`,
    display: "block",
    maxWidth: `calc(100% - 1.25rem)`,
    minWidth: `calc(100% - 1.25rem)`,
    padding: "calc(.75em - 1px)",
    resize: "vertical",
    maxHeight: "40em",
    minHeight: "8em"
  }
  
const select ={
    alignItems: "center",
    border: "1px solid transparent",
    boxShadow: "none",
    height: "2.5em",
    justifyContent: "flex-start",
    lineHeight: "1.5",
    paddingBottom: "calc(.5em - 1px)",
    paddingLeft: "calc(.75em - 1px)",
    paddingTop: "calc(.5em - 1px)",
    position: "relative",
    verticalAlign: "top",
    backgroundColor: "#fff",
    borderColor: "#dbdbdb",
    borderRadius: ".375em",
    color: "#363636",
    cursor: "pointer",
    display: "block",
    fontSize: "1em",
    maxWidth: "100%",
    outline: "0",
 }

class FormStyling extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            comment:'',
            topic:'react'
        }
    }

    submitHandler = (event)=>{
        const {name, comment, topic} = this.state
        alert(
`Name: ${name}
Comment: ${comment}
Topic: ${topic}`
        )
        event.preventDefault()
    }

    nameChangeHandler = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    commentChangeHandler = event =>{
        this.setState({
            comment: event.target.value
        })
    }

    topicChangeHandler = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    render(){
        const {comment, topic} = this.state
        return(
            <section style={hero}>
                <div style={hero.head}>
                    <h1 className={`title`}>Form</h1>
                    <p style={{
                        boxSizing: "inherit",
                        margin: "0",
                        padding: "0",
                        wordBreak: "break-word",
                        fontSize: "1.25rem",
                        lineHeight: "1.25",
                        color: "rgba(255,255,255,.9)"                    
                    }}>Form styling using global css, style and inline styles</p>
                </div>
                <div style={hero.body}>
                    <form className={`box`} onSubmit={this.submitHandler}>
                    <div style={field}>
                        <label style={label} htmlFor="name">Name</label>
                        <div style={control}>
                            <input placeholder="Enter name" onChange={this.nameChangeHandler} name="name" style={input} type="text" value={this.state.name}/>
                        </div>
                    </div>
                    <div style={field}>
                        <label style={label} htmlFor="comment">Comments</label>                        
                        <textarea placeholder="Some comments ..." onChange={this.commentChangeHandler} name='comment' style={textarea}></textarea>
                    </div>
                    <div style={field}>
                        <label style={label} htmlFor="topic">Topics</label>
                        <select onChange={this.topicChangeHandler} style={select} name="topic" value={topic}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">VUE</option>
                        </select>
                    </div>
                    <button className={`button is-link`}>Accept</button>
                    </form>
                </div>
                <div style={hero.foot}>
                    <small>Elements must inspired by <a href="https://bulma.io/">Bulma</a></small>
                </div>
            </section>            
        )
    }
}

export default FormStyling