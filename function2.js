//function expression
/*
const squre=function(number){return number*number};
var x=squre(4)
console.log(x)
*/
/*
const a=function(b,c){
    return b+c;
}
let n=a(5,6)
console.log(n)*/
/*
const a=function(){
    console.log('hello')
}
a()
console.log(a)
*/
/*
const c={
    'fun':function d(){
        console.log('hello')
    }
}
const b=c.fun;
console.log(b)
*/
/*
function foo(){
    console.log("hi Good")
}

let faa=foo;
foo()
faa() */
/*
function ask(question,yes,no){
    console.log(question)
    yes()
    no()
}

function showOk(){
        console.log("you Agrred");
}

function showCancel(){
    console.log("you Canceled the execution");
}

ask("do you Agree?",showOk,showCancel)
*/
/*
function ask(question,yes,no){
    console.log(question)
    yes()
    no()
}
ask("do you agree?",function(){console.log("you agreed")},function(){console.log("you canceled")})
*/


sayHi("John"); // Hello, John

function sayHi(name) {
  console.log( `Hello, ${name}` );
}