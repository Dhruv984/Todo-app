import React, { useState } from 'react';

import './App.css';
import Todos from './Todos';
import Todolist from './Todolist';


function App() {
  const [input,setInput]=useState();
  const [list,setList]=useState([]);
  const [edititem,setEdititem]=useState(false);
  const [canceledit,setCanceledit]=useState();
  
const handleChange=(event)=>{
   setInput(event.target.value);
}

const handleClick=(event)=>{
  setEdititem(false);
  event.preventDefault();
   setList((previousValue)=>{
       return [...previousValue,input];
  })
  setInput("");
}
const handleDelete=(buttonid)=>{
   setList((previousValue)=>{
     return previousValue.filter((eachItem,i)=>{ //returns new array based on the condition
       return i!==buttonid
     })
   })
}
const handleEdit=(id)=>{
  setEdititem(true);
  setInput(list.find((item,i)=>{  //returns single element based on the condition given
      return id===i && setCanceledit(list[id])
  }))
  setList((previousValue)=>{
    return previousValue.filter((eachItem,i)=>{
      return id!==i
    })
  })
 }
 const cancelEdit=(event)=>{
   event.preventDefault();
   setEdititem(false);
   setList((previousValue)=>{
     return [...previousValue,canceledit]
   });
   setInput("");
 }
  return(
 <div>
   <Todos input={input} handleChange={handleChange} handleClick={handleClick} handleEdit={handleEdit} edititem={edititem} cancelEdit={cancelEdit}/>
   <Todolist list={list} handleDelete={handleDelete} handleEdit={handleEdit}/>
</div>
 );
}

export default App;
