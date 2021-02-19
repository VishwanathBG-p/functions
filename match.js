/*
const c=[1,0,1,0,0,1]
const d=[0,1,0,1,0,1]
let count=0
let a=[]
let b=[]
a=c
b=d


function match(c,d){ 

c.forEach((e) =>d.forEach((e1)=>{
    if(e===e1){
        count++
    }
}
    
));
return count

}

match()
console.log(count)

*/

const arr1=  [1,5,6,7,5,6,5,56,11,78,9789,8679,7,10];
const arr2= [1,5,6,7,8,5,6,7,8,10,11,78];

function compare(arr1,arr2){
    const finalarray =[];
    arr1.forEach((a)=>arr2.forEach((b)=>{
        if(a===b){
            finalarray.push(a)
        }

    }
    ))
    
    return finalarray
    
}

  compare(arr1,arr2)
  


  