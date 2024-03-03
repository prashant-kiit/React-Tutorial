import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import './App.css'

function App() {
  console.log("Running")
  const [password, setPassword] = useState('NULL')
  const [charAllowed, setcharAllowed] = useState(true)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [specialcharAllowed, setspecialcharAllowed] = useState(false)
  const [passwordlength, setpasswordlength] = useState(25)
  const [number, setNumber] = useState(10)
  const renderCount = useRef(0)
  const passwordRef = useRef(1)
  const prePassword = useRef('None')
  const CharString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const NumberString = '0123456789'
  const SpecialcharString = '!@#$%^&*()-_=+[{]}|;:,<.>/?'

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log('REF 1 = ' + renderCount.current) 
  }, [])
  
  useEffect(() => {
    prePassword.current = password
    console.log('REF 2 = ' + renderCount.current) 
  }, [password])

  useEffect(() => {
    setPassword(getPassword)
    console.log("Get Password = " + password)
    console.log([passwordlength, charAllowed, numberAllowed, specialcharAllowed])
  }, [passwordlength, charAllowed, numberAllowed, specialcharAllowed])

  const getPassword = useCallback(() => {
    let stringPool = ''

    if (charAllowed) {
      stringPool += CharString
    }

    if (numberAllowed) {
      stringPool += NumberString
    }

    if (specialcharAllowed) {
      stringPool += SpecialcharString
    }

    let passwordVersion = ''

    for (let i = 1; i <= passwordlength; i++) {
      const randomIndex = Math.floor(Math.random() * stringPool.length)
      passwordVersion += stringPool.charAt(randomIndex)
    }

    return passwordVersion
  }, [passwordlength, charAllowed, numberAllowed, specialcharAllowed])

  const slowFun = (number) => {
    for (let i = 0; i <= 100000000; i++) { }
    return number * 100
  }

  const slowFunOutput = useMemo(() => {
    return slowFun(number)
  }, [number])
  // const slowFunOutput = slowFun(number)

  const copyToClipboard = () => {
    passwordRef.current.select()
    passwordRef.current.focus()
    window.navigator.clipboard.writeText(password)
    // passwordRef.current.value = 'Bingo'
  }

  return (
    <div>
      <div>
        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          type="checkbox" id="char-allowance" name="char-allowance" value={charAllowed} checked={charAllowed} onChange={() => {
            setcharAllowed(!charAllowed)
          }} />
        <label className="md:w-2/3 text-gray-500 font-bold"
          htmlFor="char-allowance"> Character </label>
      </div>
      <div>
        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          type="checkbox" id="number-allowance" name="number-allowance" value={numberAllowed} onChange={() => {
            setnumberAllowed(!numberAllowed)
          }} />
        <label className="md:w-2/3 text-gray-500 font-bold"
          htmlFor="number-allowance"> Number </label>
      </div>
      <div>
        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          type="checkbox" id="specialchar-allowance" name="specialchar-allowance" value={specialcharAllowed} onChange={() => {
            setspecialcharAllowed(!specialcharAllowed)
          }} />
        <label className="md:w-2/3 text-gray-500 font-bold"
          htmlFor="specialchar-allowance"> Special Character </label>
      </div>
      <div>
        <input
          type="range" min="1" max="50" id="passwordlength" name="passwordlength" onChange={(e) => {
            setpasswordlength(e.target.value)
          }} />
        <label className="md:w-2/3 text-gray-500 font-bold"
          htmlFor="passwordlength"> Length = {passwordlength}</label>
      </div>
      <div>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-6/12 p-2.5"
          type="text" ref={passwordRef} id="generate-password" name="generate-password" placeholder="Password shows here" value={password} readOnly />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setPassword(getPassword)
          }}>
          Generate Password
        </button>
        {" "}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={copyToClipboard}>
          Copy To Clipboard
        </button>
      </div>
      <div>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-6/12 p-2.5"
          type="number" value={number} onChange={(e) => {
            setNumber(e.target.value)
          }} />
        <label className="md:w-2/3 text-gray-500 font-bold">Slow Func Output = {slowFunOutput} </label>
      </div>
      <div className="md:w-2/3 text-gray-500 font-bold">
        Render Count = {renderCount.current} and Previous password = {prePassword.current}
      </div>
    </div>
  )
}

export default App
