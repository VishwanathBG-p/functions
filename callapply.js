/*
let person1={
    fullNmae:function(){
        return this.firstname+""+this.lastname
     }
}

let person2={
    firstname:'hwak',
    lastname:'rider'
}

let m=person1.fullNmae.call(person2)
console.log(m)
*/

function na(name,price){
    this.name=name
    this.price=price
}

function food(name,price){
    na.call(this,name,price)
    this.cat="food";
}
console.log(new food('chese',10).name)
