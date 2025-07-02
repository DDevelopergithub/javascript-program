
var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);

var myName = "pooja";
var myAge ="23";
console.log(typeof myName);
console.log(typeof myAge);


var myAgeInNumber = +myAge;
console.log(myAgeInNumber, typeof myAgeInNumber);

var myNameString = +myName;
console.log(myNameString, typeof myNameString);

var myName = "pooja";
console.log(typeof myName);
var myNameString = +myName;
console.log(myNameString,typeof myNameString);

var operand1 = 100;
var operand2 = 300;
console.log(operand1 + operand2);

console.log(`===============Implicit Conversion==================`);
console.log("5"- true);

var operand2 =300;
console.log(operand2 ,typeof operand2 );
var operand2Str = operand2.toString();
console.log(operand2Str , typeof operand2Str);

console.log(`===============Explicit Conversion==================`);
var numberInString = "200";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);

console.log(`===Explicit Conversion using string()method==========`);
var myNumber =200;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);



















