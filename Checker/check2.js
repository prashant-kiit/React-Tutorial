let array = [];
let arrayString = JSON.stringify(array);
console.log(arrayString);
let newArray = JSON.parse(arrayString);
newArray.push('abc')
console.log(newArray);