// If we have a functionin the module that we invoked, the require will work without assigning it to a variable
const num1=5
const num2= 10
function addvalues(){
    console.log(`The sum is : ${num1+ num2}`);
}
addvalues()