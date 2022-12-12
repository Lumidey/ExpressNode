// const amount= 12
// if (amount <10){
//     console.log('small number');
// }else{
//     console.log('large number');
// }
// console.log(`Hey its my first node app`);
//Globals -No Window
//__dirname- Path to a current directory
// __filename- file name
// require- function to use modules
//modules - info about current module (file)
//process- info about environment where the project is being executed
// const names =require('./names')
// console.log(names);
const sayHi= require('./utils')

//SayHi in line 16 is just a variable name. It could be anything
// console.log(sayHi);
sayHi('susan')
sayHi('john')
sayHi('peter')
const alternative=require('./alternative')
console.log(alternative);
require('./mind')