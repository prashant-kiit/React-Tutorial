let array = [{id:'Prashant', value: true },{id:'Chinku', value: false } ];
let arrayString = JSON.stringify(array);
console.log(arrayString);
let newArray = JSON.parse(arrayString);
newArray.push({id:'XYZ', value: true })
console.log(newArray[1].id);
newArray[0].value = false;
console.log(newArray[0].value);
console.log(newArray[2]);
console.log(newArray);