import { useState } from 'react'
import InputBox from './InputBox.jsx'
import Todos from './Todos.jsx'
import './App.css'

function App() {
  console.log('Refresh')
  const [todoName, setTodoName] = useState('')
  const [event, setEvent] = useState('INACTIVE')

  if (!localStorage.getItem('todoList')) {
    localStorage.setItem('todoList', JSON.stringify([]))
  }

  const storeTodo = async (todoObject) => {
    const oldtodosString = localStorage.getItem('todoList')
    // console.log(oldtodosString)
    let oldtodosArray = JSON.parse(oldtodosString)

    oldtodosArray.push(todoObject)

    const newtodosString = JSON.stringify(oldtodosArray)
    // console.log(newtodosString)
    localStorage.setItem('todoList', newtodosString)

    // globalThis.location.reload()
  }

  return (
    <div>
      <div>
        <InputBox
          todoName={todoName}
          OnTodoNameChange={(todoName) => { setTodoName(todoName) }}
        />
        <button id="todo-add"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            const todoObject = { todoName_: todoName, isTodoDone_: false }
            await storeTodo(todoObject)
            setEvent('SEND')
          }}>
          Add Todo
        </button>
      </div>
      <div>
        <ul id="todos">
          <Todos
            event={event}
            OnEventChange={(event) => {
              setEvent(event)
            }}
          />
        </ul>
      </div>
    </div>
  )
}

export default App
