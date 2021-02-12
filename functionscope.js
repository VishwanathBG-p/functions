let num1=10,num2=20,name="hwak"
function multi(){
    return num1*num2
}

console.log(multi())

/*nested function*/

function greet(){
    let num1=20,num2=20;
     function add(){
         return num1+num2
     }

    return add()
}

console.log(greet())
