
console.log("=========function with no argument and no return value============");
function dayOfTheWeek(){
console.log("Today is Monday....");
}
dayOfTheWeek();

console.log("=========function with  argument and no return value============");
function addition(n1,n2,n3){
var result = n1+n2+n3;
console.log(result);
}
addition(60,70,40);
addition(10.40,99.567,34.678);

console.log("=========function with argument and  return value============");
function square(num){
    var result = num *num;
    return result;
}
var squareValue = square(15);
console.log("square is:",squareValue);

var returnValue=square(11);
console.log("square is:",returnValue);


