//Task

class arrayclass {

    constructor() {
        this.newArr = [];


    }

    getFind(arr, callback) {
        let result=0;
        for (const item of arr) {
            if (callback(item)) {
                result=item
                
            }
            console.log(result);
        }
        
       
    }
    getAdd(arr) {
        return this.newArr.push(arr);
    }



}
let arrr = [10,15,20,25,30]
let array = new arrayclass();
array.getAdd(5)
array.getAdd(10);
array.getAdd(5)
console.log(array);

let isnum = function(n){
        return n > 15
}
array.getFind(arrr,isnum)



//praktika

let foods = ["banan,tomatoes,cheeseburger,cheese,corots,rice,braed,milk,apple,beef"];
function isFruits(foods) {
    return foods.name == "banan,apple";
}
function isvegetables(foods) {
    return foods.name == "tomatoes,corots";
}
function isdairy(foods) {
    return foods.name == "cheese,milk";
}
function isgrains(foods) {
    return foods.name == "bread,rice,cheeseburger";
}

 foods.find(function(isFruits) {
     
 });
let types =foods.push("fruits,vegetables,dairy,grains");
console.log(isFruits);