/*
function outer(){
    let outVal="Hello There"
    console.log("this is it")
       function inner(){
            console.log(outVal);
        }
    return inner()
}

let ply=outer;
ply();
*/
/*

//LEXICAL SCOPE

const myG=10

function mFun(){
    var mVar="hello world";
    console.log(myG)
    function inFun(){
        var innVar="inner fun called"
        console.log(myG+""+mVar)
        function innerFun(){
            console.log(myG,mVar,innVar)
        }
        innerFun();
    }
    inFun();
}

mFun();

*/


//CLOSURE CALLBACK
/*
const message="hello World"

setTimeout(function callback(){
    console.log(message)
},1000)
*/

/*
let countEvan=0

let item=[1,2,5,10,100]

item.forEach(function disp(number){
    if(number%2===0){
        countEvan++
    }
})
console.log(countEvan)
*/

//function currying
/*
function multiplay(a){
    return function multi(b){
        return a*b
    }
}

let double=multiplay(2)
console.log(double(3))
*/

//NESTED FUNCTION
/*
function a(x){
    function b(y){
        function c(z){
            console.log(x+y+z)
        }
        c(3)
    }
    b(3)
}
a(3)
*/

function outside(){
    let x=5;
    function inside(x){
     console.log(x*2)
    }

    return inside(2)
}

 outside()