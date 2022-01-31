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
