/*function myCon(seprator){
    let result='';
    let i

    for(i=1;i<arguments.length;i++){
        result +=arguments[i]+seprator;
    }

    return result;

}

let m=myCon('.','hello','hi')
console.log(m)*/

/*
let x=20;

function good(){
    let x=30;
    console.log(x)
}
good()
*/
/*
var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); 
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; 
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());        
var f2 = createFunction2();
console.log(f2()); 
*/
/*
function multiplay(multiplier,...theArgs)
{
    return theArgs.map(x=>multiplier*x)
}

var arr=multiplay(2,1,2,3)
console.log(arr)
*/

function multiplay(a,b=1){
    return a*b;
}

console.log(multiplay(5))