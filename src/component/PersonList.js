import React from "react";
import Person from "./Person";

const PersonList = ({ person,handlealert }) => {
  
  return (
    <div>
      <button onClick={() =>handlealert(person[0].name)}>click to alert</button>
      <h1>
      {person.map((el) => (
          <Person handlealert={handlealert} person={el} />
        ))}
        
      </h1>
    </div>
  );
};

export default PersonList;
