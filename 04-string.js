
var greet="Good Morning";
console.log(`==========Find the length of the string===========`);
var greetLength = greet.length;
console.log(`${greet} - string lenght is : ${greetLength}`);//variable substitution

console.log(`=============chatAt()============`);
var charAtIndex0=greet.charAt(0);
console.log(`char available at index 0 is :${charAtIndex0}`);

var charAtIndex7=greet.charAt(7);
console.log(`char available at index 7 is :${charAtIndex7}`);

var str ="hello buddy how are you doing";
var charAtLastIndex = str.charAt(str.length-1);
console.log(`char available at last index is: ${charAtLastIndex}`);

console.log(`==========concat()=====================`);
var firstname ="stew";
var lastname =" jobs ";
var result = firstname+lastname;
console.log(`concat strings using + operator ${result}`);

var result =firstname.concat(lastname).concat("I am unique");
console.log(`concat strings using concat(): ${result}`);

console.log(`=========== indexOf()============`);
var greet ="Good Morning";
var indexOfO =greet.indexOf("o");
console.log(`Index of char o : ${indexOfO}`);
var indexOfZ =greet.indexOf("z");
console.log(`Index of char z: ${indexOfZ}`);

var indexOfMorning = greet.indexOf("Morning");
console.log(`Index of sub string "Morning": ${indexOfMorning}`);

console.log(`=========== trim()=========`);
var day = "  Today is Friday  ";
console.log(`Before trim: ${day.length}`);
var trimResult = day.trim();
console.log(`After trim: ${trimResult.length}`);
var totalRemovedSpaces = day.length - trimResult.length;
console.log(`Total Spaces removed after trim() is:${totalRemovedSpaces}`);













