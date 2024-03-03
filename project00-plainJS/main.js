console.log('Running')

function myUseState(init) {
    console.log('myUseState Running')
    let count1 = init
    const setCount1 = (count11) => {
        count1 = count11
        console.log('Counter Called = ' + count1)
    }
    document.getElementById('root').innerHTML =
    `   <h1> Hello Counter </h1>
    <label> Output = ${count1}</label>
    <button type="button">Call Counter</button>  `
    console.log('myUseState Ending')
    return [count1, setCount1]
}

let [count, setCount] = myUseState(0)

const setCountWrap = () => { 
    setCount(count + 1) 
}

document.getElementById('root').addEventListener('click', setCountWrap)
console.log("Ending")
