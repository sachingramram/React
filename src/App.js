 import React, {useState} from "react";
 import TodoList from "./components/todolist";
 import AddItem from "./components/additem";
import "./App.css";
 const App=()=>{
    const [listitems, setListItems] = useState([
        // {itemid :Math.trunc(Math.random()*100+1),itemname:"1. Buy Food"},
        // {itemid :Math.trunc(Math.random()*100+1),itemname:"2. Play"},
        // {itemid :Math.trunc(Math.random()*100+1),itemname:"3. Study"},


    ])
    const addItemHandler=(newitem)=>{

      setListItems((previousList)=>{
        return previousList.concat(newitem);

      });
      // listitems.push(newitem);
      // console.log(listitems);
    }
      const name ="MERN";
    return (
        <div className="container">
        <h1>{name}'s Todo List</h1>
         <AddItem onAddItem={addItemHandler}/>
        <TodoList list={listitems}/>
       </div>
    );
 };
 
 export default App;