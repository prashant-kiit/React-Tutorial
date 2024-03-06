import { useState, useEffect, useCallback } from "react"

function Inputbox({
    currency, 
    currencyvalue, 
    amount, 
    // totalAmount = true, 
    OnCurrencyChange, 
    OnCurrencyvalueChange, 
    OnAmountChange}) {
    console.log('Running 2')

    const [currencies, setCurrencies] = useState([])
    const [currenciesobject, setCurrenciesobject] = useState([])
    // const [currency, setCurrency] = useState('')
    // const [currencyvalue, setCurrencyvalue] = useState(0)
    // const [amount, setAmount] = useState(0)
    // const [totalamount, setTotalamount] = useState(0)

    const fetchCurrencies = useCallback(() => {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9XTUNr31Ld0WhydgvWGCG70M8lttMF8bB1n7udsR')
            .then((res0) => {
                return res0.json()
            })
            .then((res1) => {
                return res1.data
            })
            .then((res2) => {
                setCurrenciesobject(res2)
                let currencies = []
                currencies.push(['NULL', 0])
                Object.keys(res2).map((key) => {
                    currencies.push([key, Number(res2[key])])
                })
                return currencies
            })
            .then((currencies) => {
                setCurrencies(currencies)
            })
    }, [])

    useEffect(() => {
        fetchCurrencies()
    }, [])

    return (
        <div>
            <div>
                <label htmlFor="currencies"> Currency = </label>
                <select name="currencies" id="currencies" value={currency} onChange={(e) => {
                    OnCurrencyChange(e.target.value)
                    OnCurrencyvalueChange(currenciesobject[e.target.value])
                    // console.log(currencies)
                    // console.log(currency)
                    // console.log(currenciesobject[e.target.value])
                }}>
                    {currencies.map((currency) => (
                        <option key={currency} value={currency[0]}>{currency[0]}</option>
                    ))}
                </select>
            </div>
            <div>
                Currency Value = {currencyvalue}
            </div>
            <div>
                <label htmlFor="amount"> Amount = </label>
                <input name="amount" id="amount" type="number" value={amount} onChange={(e) => {
                    OnAmountChange(e.target.value)
                }} />
            </div>
            {/* <div>
                Total Amount = {totalAmount}
            </div> */}
            {/* <div>
                <button name="total-amt-button" id="total-amt-button" onClick={() => {
                    OnTotalAmountChange(currencyvalue * amount)
                }}>
                    Click Me!!!
                </button>
            </div> */}
        </div>
    )
}

export default Inputbox