const car = 'toyota';
const model = 'prius';

//True
console.log("Is car == 'toyota' and model != 'prius'?, I predicted True");
console.log(car == "toyota" && model != 'vitz');
//False
console.log("Is car != 'toyota'? and model == 'prius', I predicted False");
console.log(car != "toyota" && model == 'vitz');

//True
console.log("\nIs car == 'toyota' and model != 'prius'?, I predicted True");
console.log(car == "TOYOTA".toLowerCase() && model != 'VITZ'.toLowerCase());
//False
console.log("Is car == 'TOYOTA' and model != 'PRIUS'?, I predicted false");
console.log(car == "TOYOTA" && model != 'VITZ');

const num1 = 10;
const num2 = 20;
//True
console.log("\nIs num1 == '10' and num2 != '10'?, I predicted true");
console.log(num1 == 10 && num2 != 10);
//False
console.log("Is num1 != '10' and num2 == '22'?, I predicted false");
console.log(num1 != 10 && num2 == 22);

//True
console.log("\nIs num1 > '5' and num2 < '30'?, I predicted true");
console.log(num1 > 5 && num2 < 30);
//False
console.log("Is num1 > '12' and num2 < '10'?, I predicted false");
console.log(num1 > 12 && num2 < 10);

//True
console.log("\nIs num1 > '5' or num2 < '10'?, I predicted true");
console.log(num1 > 5 || num2 < 10);
//False
console.log("Is num1 > '12' or num2 < '10'?, I predicted false");
console.log(num1 > 12 || num2 < 10);

const fruits = ["banana", "apple", "orange", "mango", "strawberry"];
console.log("\nIs mango exists in array?, I predicted True");
console.log(fruits.includes("mango"));

console.log("\nIs pineapple doesn't exists in array?, I predicted true");
console.log(fruits.indexOf("pineapple") < 0);
