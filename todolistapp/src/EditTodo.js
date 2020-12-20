 import React from 'react'

 function EditTodo(props) {
     return (
        <div>
            <button onClick={()=>{
                props.handleEdit(props.id)
            }}>Edit Todo</button>
        </div>
     )
 }

 export default EditTodo

