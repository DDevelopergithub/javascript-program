
var arrayOfNumbers = [1,2,3,4,5,6,7,8,9];
console.log(arrayOfNumbers);
var arraylength = arrayOfNumbers.length

console.log(`Total number of elements available in array :${arraylength}`);
console.log(`Element  at 4th Index is : ${arrayOfNumbers [4]}`);

arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);

console.log(`===========for loop================`);
const fruits =["Apple","Banana","Orange","Pineapple","Mango"];
for (const element in fruits){
    console.log(fruits[element]);
    }
console.log(`==========================`);

 const vegetables = ["Caret","cucumber","chili","Tomato","potato"] 
 for (let index =0; index < vegetables.length;index++){
    const element = vegetables [index];
    console.log(`${element}`);
    }  

 console.log(`=============set==================`);
const array_number = [1,2,3,4,6,4,6,88,9,4,3,11,46,4,1];
const array_new = [...new Set(array_number)];
console.log(array_new);

console.log(`================map==================`);

const map_name=["poonam","kajal","tejal","prajkta","Rupali", "poonam","Geeta,"];
const name_new = [...new Set(map_name)];
console.log(name_new);


 
    







