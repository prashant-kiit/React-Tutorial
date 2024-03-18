import InputBox from './InputBox.jsx'
import Todos from './Todos.jsx'
import './App.css'

function App() {
  console.log('Refresh')

  return (
    <div>
      <InputBox />
      <div>
        <ul id="todos">
          <Todos />
        </ul>
      </div>
    </div>
  )
}

export default App
