import React from 'react'
import EditTodo from "./EditTodo"

function DeleteTodo(props) {
    return (
        <div>
            <li>{props.singleTodo}</li>
            <button onClick={()=>{
                props.onSelect(props.id)
            }}>Delete Todo</button>
            <EditTodo handleEdit={props.handleEdit} id={props.id}/>
        </div>
    )
}

export default DeleteTodo
