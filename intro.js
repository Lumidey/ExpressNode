const amount= 12
if (amount <10){
    console.log('small number');
}else{
    console.log('large number');
}
console.log(`Hey its my first node app`);
console.log(__dirname);
console.log(__filename);
setInterval(()=>{
    console.log('Hello Node Gee');
}, 2000)
//Modules
const john = 'john'
const peter = 'peter'

const sayHi= (name)=>{
    console.log(`Hello there ${name}`);
}
sayHi('susan')
sayHi('john')
sayHi('peter')