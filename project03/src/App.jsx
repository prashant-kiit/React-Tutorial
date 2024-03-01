import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('None')

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
        You clicked this color!!
        <br></br>
        {color}
      </h1>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setColor('Red')}}>
        Click Me!! Red
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setColor('Yellow')}}>
        Click Me!! Yellow
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setColor('Blue')}}>
        Click Me!! Blue
      </button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setColor('Orange')}}>
        Click Me!! Orange
      </button>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setColor('Purple')}}>
        Click Me!! Purple
      </button>
    </div>
  )
}

export default App
