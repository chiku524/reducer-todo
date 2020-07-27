import React from 'react'

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.state.todo.map(todo => {
                return (
                    <div key={todo.id} onClick={() => { props.toggleItem(todo.id) }} className={`todo${todo.completed ? "completed" : ""}`}>
                        <p >{todo.what}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default TodoList  