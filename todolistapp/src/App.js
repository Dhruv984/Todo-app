import React, { useState } from 'react';

import './App.css';
import Todos from './Todos';
import Todolist from './Todolist';


function App() {
  const [input,setInput]=useState();
  const [list,setList]=useState([]);

const handleChange=(event)=>{
   setInput(event.target.value);
}

const handleClick=()=>{
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
  setInput(list.find((item,i)=>{
      return id===i
  }))
  setList((previousValue)=>{
    return previousValue.filter((eachItem,i)=>{
      return id!==i
    })
  })
 }
  return(
 <div>
   <Todos input={input} handleChange={handleChange} handleClick={handleClick} />
   <Todolist list={list} handleDelete={handleDelete} handleEdit={handleEdit}/>
</div>
 );
}

export default App;
