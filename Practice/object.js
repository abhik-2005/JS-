// singleton
// Object.create


// litterals

//using symbol variable
const sym = Symbol("Key1")
const juser = {
    name: "Abhi", //by-default key is in "" form
    age: 22,
    [sym]:"it is symbol" //declaring symbol 
}
console.log(juser.name); // It is ok but
console.log(juser["name"]);//Is better
console.log(juser[sym]);//this is to access symbol
