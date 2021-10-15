import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 3,
            name: 'Bruce',
            age: 30,
            skill: 'react'
        }
    ]
    const nameList = names.map((name, index )=> <h2 key={index}>{index} {name}</h2>)
    return (
        <div> 
            {nameList}
        </div>
    )
}

export default NameList
