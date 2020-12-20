import React from 'react';
import DeleteTodo from './DeleteTodo';
function Todolist(props) {
    return (
        <div>
            {
                props.list.map((singleTodo, index) => {
                    return (
                    <DeleteTodo singleTodo={singleTodo} key={index} id={index} onSelect={props.handleDelete} handleEdit={props.handleEdit}/>
                    )
                })

            }

        </div>
    )
}

export default Todolist
