 import React from 'react'

 function EditTodo(props) {
     return (
        <div>
            <button onClick={()=>{
                props.handleEdit(props.id)
            }}>Edit todo</button>
        </div>
     )
 }

 export default EditTodo

