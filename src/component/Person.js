import React from 'react'

const Person = ({person,handlealert}) => {
    
  return (
    <div>
        <h2 onClick={handlealert(person.name)}>
             {person.name} 
        </h2>
        <p>{person.age}</p>
        <h3>{person.active ? "active" : "none active" }</h3>
        
        
    </div>
  )
}

export default Person