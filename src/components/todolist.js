import React from "react";
import "./todolist.css";

const TodoList=(props)=>{
    console.log(props);
    return(
    <ul className="todolist">
        {props.list.map((listitem)=>{

          return  <li key={listitem.id}>{listitem.itemname}</li>
    
      })}
     </ul>
    );
};

export default TodoList;