function rand(num){
    // this is a function that returns a 
    //random number between 0 and num
    var randNum = Math.random()*num;
    return randNum
}
console.log(rand(10));


var myCoin = ['heads','tails'];

console.log(myCoin[rand(2)]);

var