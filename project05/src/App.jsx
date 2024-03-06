import { useState } from 'react'
import Inputbox from './Inputbox.jsx'

function App() {
  console.log('Running 1')

  const [currencyFrom, setCurrencyFrom] = useState('')
  const [currencyTo, setCurrencyTo] = useState('')
  const [currencyvalueFrom, setCurrencyvalueFrom] = useState(0)
  const [currencyvalueTo, setCurrencyvalueTo] = useState(0)
  const [amountFrom, setAmountFrom] = useState(0)
  const [amountTo, setAmountTo] = useState(0)
  // const [totalamountFrom, setTotalamountFrom] = useState(0)
  // const [totalamountTo, setTotalamountTo] = useState(0)

  return (
    <div>
      <div>
        <label>From:</label>
        <Inputbox
          currency={currencyFrom}
          currencyvalue={currencyvalueFrom}
          amount={amountFrom}
          // totalAmount={totalamountFrom}
          OnCurrencyChange={(currencyFrom) => { setCurrencyFrom(currencyFrom) }}
          OnCurrencyvalueChange={(currencyvalueFrom) => { setCurrencyvalueFrom(currencyvalueFrom) }}
          OnAmountChange={(amountFrom) => { setAmountFrom(amountFrom) }} />
      </div>
      <hr />
      <div>
        <label>To:</label>
        <Inputbox
          currency={currencyTo}
          currencyvalue={currencyvalueTo}
          amount={amountTo}
          // totalAmount={totalamountTo}
          OnCurrencyChange={(currencyTo) => { setCurrencyTo(currencyTo) }}
          OnCurrencyvalueChange={(currencyvalueTo) => { setCurrencyvalueTo(currencyvalueTo) }}
          OnAmountChange={(amountTo) => { setAmountTo(amountTo) }} />
      </div>
      <hr />
      <div>
        <button type="submit" name="convert-button" id="convert-button" onClick={(e) => {
          e.preventDefault()
          // setTotalamountFrom(currencyvalueFrom * amountFrom)
          // setTotalamountTo((currencyvalueFrom / currencyvalueTo) * amountFrom)
          setAmountTo((currencyvalueTo / currencyvalueFrom) * amountFrom)
          // console.log(currencyvalueTo)
          // console.log(currencyvalueFrom)
          // console.log(amountFrom)
          console.log((currencyvalueTo / currencyvalueFrom) * amountFrom)
        }}>
          Convert
        </button>
      </div>
    </div>
  )
}

export default App
