/*
function loop(x){
    if(x>=10)
        return;

  loop(x+1)
  console.log(x)

}

console.log(loop(1))*/

/*
function foo(i)
{
    if(i<0)
        return;
    console.log("start:"+i)
    foo(i-1)
    console.log("end:"+i)
}

foo(3)
*/

/*
function add(num){
    if(num<=0){
        return 0;
    }

    else {
    console.log(num)  
    num+add(num-1);
    }

    console.log("total is:"+num)
}

add(3)*/

/*
const a=function num(s){
    for(let i=0;i<s.length;i++){
        console.log("",s[i])
    }
}

let m=[1,2,3,4,5,6,7,8]
a(m)*/

let area=function (width,height){
    if(height===0){
        
        return 0;
    }
    else {
        console.log(width,height)
           return width+area(width,height-1)
        console.log(width,height)
        
    }
}

console.log(area(2 ,7))
/*
function sup(val1,val2)
{
    if(val1>val2)
        return 1;
    else if(val1<val2)
        return -1
    else 
        return 0
}

let c=[2,5,0,1,8,6]
    let m=c.sort
    console.log(m)
*/