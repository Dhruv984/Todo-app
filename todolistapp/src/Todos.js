import React from 'react'

function Todos(props) {
    return (
        <div>
            <form>
            <input onChange={props.handleChange} value={props.input}></input>
            <button disabled={!props.input} onClick={props.handleClick} >{props.edititem?"Edit":"Add "}</button>
            {props.edititem?<button onClick={props.cancelEdit}>Cancel Edit</button>:null}  
            </form>
        </div>
    )
}

export default Todos
