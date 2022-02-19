//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a. subract the last value by the first value 93-3
var firstAge = ages.shift();
var lastAge = ages.pop();

//expecting to return 90
console.log(lastAge-firstAge);

//1b. add a new age to the array and repeat the step above.
ages.push(32);
firstAge = ages.shift();
lastAge = ages.pop();

// expecting 32-9 to return 23
console.log(lastAge-firstAge);

//1c. use a loop to calculate the average age.
ages = [3, 9, 23, 64, 2, 8, 28, 93];

//calc the average age
var avgAge = 0;
for(var i = 0; i < ages.length; i++){
    // add the ages together and divide by number of ages
    // in this case we are dividing each number by 8 and adding them together.  This will still give us the average.
    avgAge += (ages[i] / ages.length);
}
// expected 28.75
console.log(avgAge);

//2.	Create an array called names that contains the following values: "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob".
let names =["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a. use a loop to calculate the average number of letters per name
// get the number of letter per name
let letters = names.map(function(element){
    return element.length;
})
//get the avg of the letters
let avgLetter = 0;
for(var i = 0; i < names.length; i++){
    avgLetter += (letters[i] / letters.length) ;
}
//expected 3.833
console.log(avgLetter)

//2b. use a loop to concatenate all the names together seperated by spaces.
var namesList = "";
for(i = 0; i < names.length; i++){
    namesList += names[i] + " ";
}
// expected Sam Tommy Tim Sally Buck Bob
console.log(namesList);

//3.   How to access the last element of any array. Expecting Bob
console.log(names[names.length-1]);
//4.   how to access the first element of any array. Expecting Sam
console.log(names[0]);

//5.   Create an Array called nameLengths. I used an arrow function in this one, it accomplishes the same thing as line 37
let namesLength = names.map(element => element.length);
// expected [3, 5, 3, 5, 4, 3]
console.log(namesLength);
// Make a loop to calclulate the sum of all the elements in the array.
let sumNameLength = 0;
for(i = 0; i < namesLength.length; i++){
    // += is the same thing  as sumNameLength = namesLength[i] + sumNameLength;
    sumNameLength += namesLength[i];
}
// expected 23
console.log(sumNameLength);

//6.    Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//      (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function wordConcatenated(word, n){
    let newWord = "";
    for(i = 0; i < n; i++){
        // newWord will run n times adding word together n times
        newWord += word; 
    }
    return newWord;
}
// I can declare new variables and plug them into my function or type variables into my function.
// expected "HelloHelloHelloHelloHello"
console.log(wordConcatenated("Hello", 5));

//7.	Write a function that takes two parameters, firstName and lastName, 
//      and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
    // the ${} takes my variable and places it in my quotes below and includes a space in the middle.
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}
// I declared variables and plugged them into my function here.
var firstName = "Jeff";
var lastName = "Bridges";
//expected "Jeff Bridges"
console.log(fullName(firstName, lastName));

//8.    Write a function that takes an array of numbers and returns true
//      if the sum of all the numbers in the array is greater than 100
function arrayGT100(array){
    //find the sum of the array
    let sum = 0;        
    for(i = 0; i < array.length; i++){
    // add array numbers
    sum += array[i];
    }
    // check to see if sum is great than 100, if so then return true
    if(sum > 100){
        return true;
    }
    else{
        return false;
    }
 }
 // using array sumNameLength [3, 5, 3, 5, 4, 3]  23 < 100 expected false
 console.log(arrayGT100(sumNameLength));
 // new number array
 let numberArray = [10,25,40,28];
 // expected true 103 > 100
 console.log(arrayGT100(numberArray));

//9.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgArray(array){
    let sum = 0;        
    for(i = 0; i < array.length; i++){
     // add array numbers
    sum += array[i];
    }
    // return average of all elements
    return (sum/array.length);
}
// expected from numberArray 103/4 = 25.75
console.log(avgArray(numberArray));

//10.	Write a function that takes two arrays of numbers and returns true
//      if the average of the elements in the first array is greater than the average of the elements in the second array.
function isArrayGT(array1, array2){
    // calc array1 avg
    let sum1 = 0;        
    for(i = 0; i < array1.length; i++){
    // add array1 numbers
    sum1 += array1[i];
    }
    let avg1 = (sum1/array1.length);
    // calc array2 avg
    let sum2 = 0;        
    for(i = 0; i < array2.length; i++){
    // add array2 numbers
    sum2 += array2[i];
    }
    let avg2 = (sum2/array2.length);
    // return true if avg1 > avg2
    if(avg1 > avg2){
        return true;
    }
    else{
    return false;
    }
}
// expected true 25.75 > 3.8333
console.log(isArrayGT(numberArray, namesLength));

//11.	Write a function called willBuyDrink that takes a boolean isHotOutside,
//      and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(boolean, number){
    // returns true if it is hot outside and money is greater than 10.5
    if(boolean === true && number > 10.50){
        return true;
    }
    else{
        return false;
    }
}
let isHotOutside = true;
let moneyInPocket = 20;
// expected true
console.log(willBuyDrink(isHotOutside,moneyInPocket));
isHotOutside = true;
moneyInPocket = 10;
//expected false
console.log(willBuyDrink(isHotOutside,moneyInPocket));

//12.	Create a function of your own that solves a problem. In comments,
//      write what the function does and why you created it.

// My function will check to see if I need to go to bed. 
// It will check to see if my homework is done or if I am tired and frustrated.
// If my homework is done then I can go to bed.  If I'm tired but not frustrated
// then I should continue doing homework vice versa.
// I made this function so I can check to see if I need to finish homework or
// if I should take a break and have a fresh start.
function goToBed(bool1, bool2, bool3){
    if(bool1 == true || (bool2 == true && bool3 == true)){
        return "You need a break, go to bed.";
    }
    else{
        return "You can still work on homework.";
    }
}
let isHWDone = false;
let isTired = true;
let isFrustrated = false;
// expected "You can still work on homework."
console.log(goToBed(isHWDone,isTired,isFrustrated));

