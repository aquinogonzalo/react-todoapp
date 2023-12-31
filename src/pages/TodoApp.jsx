import { useState } from "react"
export const TodoApp = () => {
  

    // Lógica para almacenar los todos
      const [todo, TodoState] = useState("")
      const [todoList, setTodoList] = useState([])
    // Lógica para añadir un todo
      const addTodoList=()=>{
        setTodoList([...todoList, todo])
      }

      const todoAction = ({key}) =>{
        if(key === "Enter" && todo !== ""){
          addTodoList(todo)

        }
        
      }
    // Lógica para completar un todo

    return (
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <h1>TodoApp</h1>
          </div>
        </div>
  
        {/* TodoFilter */}
        <div className="row mb-3">
          <div className="col d-flex gap-1">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-success">Active</button>
            <button className="btn btn-sm btn-danger">Completed</button>
            <button className="btn btn-sm btn-warning">Clear Completed</button>
          </div>
        </div>
  
        {/* TodoAdd */}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
            <h3>New Todo</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              name="desc"
              // Evento cuando cambia el valor del input
              onChange={(e) => {
                TodoState(e.target.value)
              }}
              // Evento cuando presiona tecla Enter en ASCII
              onKeyUpCapture={
                  todoAction
                  
              }
            />
          </div>
  
          {/* TodoList */}
          <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>
            <ul className="list-unstyled">
              {/* TodoList Item */}
              {todoList.map((todo, index) => (
            <li className={'list-group-item'} key={index}>
              <span>{todo}</span>
            </li>
          ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  