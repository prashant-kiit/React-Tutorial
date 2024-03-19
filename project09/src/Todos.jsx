import { useState } from "react"

function Todos({
    event,
    OnEventChange, }) {

    console.log('Todos Refreshed')
    OnEventChange('RECEIVED')
    console.log(event)
    
    const todosString = localStorage.getItem('todoList')
    const todosArray = JSON.parse(todosString)
    console.log('Current Todos Array')
    console.log(todosArray)

    const storeIsTodoDone = (index, newIsTodoDone) => {
        const todosString = localStorage.getItem('todoList')
        const todosArray = JSON.parse(todosString)
        console.log('Old Todos Array')
        console.log(todosArray)
        console.log(index)
        console.log(todosArray[index].isTodoDone_)
        // let tempIsTodoDone = todosArray[index].isTodoDone_
        todosArray[index].isTodoDone_ = newIsTodoDone
        console.log('New Todos Array')
        console.log(todosArray)
        const newtodosString = JSON.stringify(todosArray)
        localStorage.setItem('todoList', newtodosString)
    }

    const TodosJSX = todosArray.map((todoObject) => {
        console.log('current todo in map')
        console.log(todoObject)
        const [isTodoDone, setIsTodoDone] = useState(todoObject.isTodoDone_)
        // all todos should be unique
        const index = todosArray.indexOf(todoObject)
        return (
            <li key={"<li>" + index}
                className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <label htmlFor={"<input>" + index}
                    className="mb-4 text-1/2 font-extrabold leading-none tracking-tight text-gray-900">
                    {index + ' . ' + todoObject.todoName_}
                </label>
                {'\t'}
                <input id={"<input>" + index} type="checkbox"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    checked = {isTodoDone}
                    onChange={() => {
                        setIsTodoDone(!isTodoDone)
                        storeIsTodoDone(index, !isTodoDone)
                    }}
                />
                {'\t'}
                <button id={"<button>" + index}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => {
                        // localStorage.removeItem(key)
                        // globalThis.location.reload()
                    }}>
                    Delete
                </button>
            </li>
        )
    })

    return TodosJSX
}

export default Todos