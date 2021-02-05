import React,{Component} from 'react'
import {names, persons} from '../data'
import Person from './Person'

class NameList extends Component{
    constructor(names, persons){
        super(names,persons)
    }

    render(){
        const personList = persons.map((person) => {
            return(<Person key={person.id} name={person.name} age={person.age}/>)
        })
 
        const namesList = names.map((name, index) =>{
            return <h2 key={index}>{name}</h2>
        })        
        return(            
            <>
                <h1>List of persons</h1>
                {personList}
                <h1>Name list</h1>
                {namesList}
            </>
        )
    }
}

export default NameList