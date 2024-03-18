import { useState } from 'react'

function Todos() {
    let serial = 1
    const todoKeys = Object.keys(localStorage)
    console.log(todoKeys)
    return todoKeys.map((key) => {
        const todo = JSON.parse(localStorage.getItem(key))
        const [isTodoDone, setIsTodoDone] = useState(todo.isTodoDone)
        return (
            <li key={"<li>" + key}
                className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <label htmlFor={"<input>" + key}
                    className="mb-4 text-1/2 font-extrabold leading-none tracking-tight text-gray-900">
                    {serial++ + '.'}
                </label>
                {'\t'}
                <label htmlFor={"<input>" + key}
                    className="mb-4 text-1/2 font-extrabold leading-none tracking-tight text-gray-900">
                    {todo.todoName}
                </label>
                {'\t'}
                <input id={"<input>" + key} type="checkbox"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    checked={isTodoDone}
                    onChange={() => {
                        setIsTodoDone(!isTodoDone)
                        localStorage.setItem(key, JSON.stringify({ todoName: todo.todoName, isTodoDone: !isTodoDone }))
                    }}
                />
                {'\t'}
                <button id={"<button>" + key}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => {
                        localStorage.removeItem(key)
                        globalThis.location.reload()
                    }}>
                    Delete
                </button>
            </li>
        )
    })
}

export default Todos