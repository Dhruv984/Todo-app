import React from 'react'

function Todos(props) {
    return (
        <div>
            <input onChange={props.handleChange} value={props.input}></input>
            <button onClick={props.handleClick} >Add Todo</button>
        </div>
    )
}

export default Todos
