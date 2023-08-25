 import React from "react";
 import TodoList from "./components/todolist";
import "./App.css";
 const App=()=>{
    const listitems=[
        {itemid :Math.trunc(Math.random()*100+1),itemname:"Buy Food"},
        {itemid :Math.trunc(Math.random()*100+1),itemname:"Watch Tv"},
        {itemid :Math.trunc(Math.random()*100+1),itemname:"Study"},


    ];
      const name ="MERN";
    return (
        <div className="container">
        <h1>{name}'s Todo List</h1>
        <TodoList list={listitems}/>
       </div>
    );
 };
 
 export default App;