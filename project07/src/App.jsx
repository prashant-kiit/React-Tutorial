import { useState } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todoList0, setTodoList0] = useState([])
  const [key, setKey] = useState(0)

  const createTodoList0 = (newTodo) => {
    let newTodoArray = []
    newTodoArray.push(
      <li key={key}>
        <p>{newTodo}</p>
        <input type="checkbox" />
        <button onClick={(event) => {
          event?.preventDefault()
          const parent = event?.target.parentNode
          parent?.remove()
        }}>Delete</button>
      </li>
    )
    setTodoList0(todoList0.concat(newTodoArray))
    // the state of a property remains consistent/persistent across the various renders
    // So the property here, todolist an array object, is being rendered
    // before every render its state is being changedusing useState
    // useRef coukd not be used b/ cref and value doesn' tseem to be viable
    setKey(key + 1)
  }

  return (
    <>
      <h1>Todo List</h1>
      <label htmlFor="new-todo"> Todos</label>
      <br />
      <input type="text" name="new-todo" placeholder="Enter the new todo" value={newTodo} onChange={(e) => {
        setNewTodo(e.target.value)
      }} />
      <button onClick={() => {
        createTodoList0(newTodo)
      }}>Add New Todo</button>
      <ul id="todo-list">
        {todoList0}
      </ul>
    </>
  )
}

export default App

/*
Possible Alternate method:
  const deleteMe1 = (event) => {
    event?.preventDefault();
    console.log("check delete");
    const parent = event?.target.parentNode;
    parent?.remove();
  }

  let button = document.getElementById('delete-me')
  button?.addEventListener('click', deleteMe1)

  const createTodoList2 = (newTodo) => {
    const todoListElement = document.getElementById('todo-list')

    const newTodoELement = `
    <li>
      <p key=${key}>${newTodo}</p>
      <button id="delete-me">Delete</button>
    </li>
    `
    todoListElement.insertAdjacentHTML('beforeend', newTodoELement)
    setKey(key + 1)
  }
*/