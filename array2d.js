/*let array=[]
array=[['hi',2],['hello',10],['good',5],['Bye',7]]*/
/*console.table(array)
array.push(['Tata',1])
console.table(array)
array.splice(0,2, ['hehe',8])
console.log(array)
array.forEach(ele=>{
    let per=((ele[1]/20)*100).toFixed()
    ele[2]=per+'%'
})

console.table(array)

array.forEach(ele=>{
    ele.pop([2])
})
console.table(array)

array.forEach(ele=>{
    ele.forEach(data=>{
        console.log(data)
    })
})*/
/*
console.table(array)

for(let i=0;i<array.length;i++){
    
    let array1 = array[i].length;
    console.log(array1)
    for(let j=0;j<array1;j++){
        console.log('['+i+','+j+']='+array[i][j])
    }

}*/
/*
let arr=[[1,2,3],[4,5,6],[7,8,9]]
console.table(arr)



for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        console.log('['+i+','+j+']='+arr[i][j])
        console.log('['+i+','+j+']='+arr[i+1][j+1])

        let a1=parseInt(arr[i][j]);
       /* let a2=parseInt(arr[i+1][j+1])*/
        /*let a3=parseInt(arr[i+2][j+2])*/
     /*   a1=a1+a1;
        console.log(a1)
    }
}
*/

function diagonalSums(matrix) {
 console.log(matrix.length)
    let mainSum = 0, secondarySum = 0;
    /*for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        console.log(mainSum)
        /*secondarySum += matrix[row][matrix.length - row - 1];*/
        
    }*/
    for(currentLine = 1 ; currentLine <= numberOfInputs ; currentLine++)
    {
        var inputs = inputAll[currentLine];
        var inputArray = inputs.split(" ");

        sumFirstDiagonal += parseInt( inputArray[ currentLine - 1 ])
        sumSecondDiagonal += parseInt (inputArray [ inputArray.length - currentLine ])

    }
    console.log(mainSum + ' ' + secondarySum);
}
 
diagonalSums([[1, 2,3], [4, 5,6],[7,8,9]]);

