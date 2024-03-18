let nums = [0, 1, 2, 3, 4, 5]
function foo1() {
    let ArrayOfBuffer = []
    ArrayOfBuffer.push(nums.map((num) => {
        return num * 2
    }))
    return ArrayOfBuffer
}

function foo2() {
    return nums.map((num) => {
        return num * 2
    })
}
console.log(foo1())
console.log(foo2())