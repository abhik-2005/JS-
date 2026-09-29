//declaring
const arr = new Array("Hello", 23, 2.5, true)
// console.log(arr);

// Array methods 
// arr.push("add") // added new element
// console.log(arr);
// arr.pop()//last element added gets pop
// console.log(arr);
// arr.unshift(55)//adds element at start
// console.log(arr);
// arr.shift() //removes start element
// console.log(arr);
// console.log(arr.includes(5)) //searches array and print boolean value
// const narr = arr.join() //copies arr into narr and also converts elements of array into string
// console.log(narr);
// console.log(typeof narr);
// const narr = new Array("Hello", 23, 2.5, true)
// console.log(arr.slice(1,3)); //display 1st and 2nd element and *No change happens in array*
// console.log(narr.splice(1,3)); // display 1st and 2nd element and 3rd element too asa well as *whole array gets modified permanantly*
// console.log(arr);
// console.log(narr);

//{
/* Combinig 2 arrays using concat
const narr = new Array("Hello", 23, 2.5, true)
const comb = arr.concat(narr)
console.log(comb);
*/

/* Combining using spread - Breaking 2 glass(array) and combinig into single array  
const narr = new Array("Hello", 23, 2.5, true)
const comb = [...arr,...narr]
console.log(comb);
*/
//}
// Spreading is easy so commonly used 

//using flat 
// const naar = [1,2,3,[4,5,[6,7,[8,9]]]] //combining main array with its sub array down
// const comb = naar.flat(Infinity) // infinty is a parameter in which how much lvl of concating 
// console.log(comb);

