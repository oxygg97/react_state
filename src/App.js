import { useState } from "react";
import "./App.css";
import React from "react";
import Navv from "./component/Navv";
import PersonList from "./component/PersonList";

const App = () => {
  const [person, setperson] = useState([
    { name: "ala", age: 23, active: false },
    { name: "amir", age: 38, active: true },
    { name: "malek", age: 55, active: true },
  ]);
  let handlealert = (x) => {
    alert(x);
  };
  return (
    <div className="App">
      <Navv />
      <PersonList handlealert={handlealert} person={person} />
    </div>
  );
};

export default App;
