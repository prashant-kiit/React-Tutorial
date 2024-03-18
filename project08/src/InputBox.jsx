import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function generateUuid() {
    return uuidv4()
}

async function sha1(str) {
    const buffer = new TextEncoder("utf-8").encode(str)
    const hash = await crypto.subtle.digest("SHA-1", buffer)
    return Array.from(new Uint8Array(hash))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('')
}

function InputBox() {
    const [todoName, setTodoName] = useState('')
    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
                Todo List
            </h1>
            <input className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="todo-input" type="text" placeholder="Enter the new todo"
                value={todoName}
                onChange={(e) => {
                    setTodoName(e.target.value)
                }}
            />
            <button id="todo-add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={async () => {
                    localStorage.setItem(generateUuid(), JSON.stringify({ todoName: todoName, isTodoDone: false }))
                    // localStorage.setItem(await sha1(todoName), JSON.stringify({ todoName: todoName, isTodoDone: false }))
                    globalThis.location.reload()
                }}>Add Todo
            </button>
        </>
    )
}

export default InputBox