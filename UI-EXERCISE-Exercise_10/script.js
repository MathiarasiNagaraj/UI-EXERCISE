// playing with Variables
console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

//playing with arrays
Cricket_Teams=["vIrat","Dhoni","Rohit Sharma","KL Rahul","Sachin","Rishab pant","Shreyas Iyer","Bumbarah","Ravindra jadeja","Mohamad Sharmi","Mohammad Shiraj"]
console.log(Cricket_Teams);
let player=Cricket_Teams.shift();
console.log(Cricket_Teams);
console.log(Cricket_Teams.length);
Cricket_Teams.push(player);
console.log(Cricket_Teams);
console.log(Cricket_Teams.length);
Cricket_Teams.sort();
console.log(Cricket_Teams);
Cricket_Teams.reverse();
console.log(Cricket_Teams);
NewCricket_Teams = Cricket_Teams.map((player) => player + " : " + (Math.random()*100).toFixed());
console.log(NewCricket_Teams)
NewCricket_Teams = Cricket_Teams.map((player) => player.toUpperCase());
console.log(NewCricket_Teams)
console.log(Cricket_Teams)

//playing with functions
/***
 * @description function to print number from 1 to 100
 */
function printNumber1To100()
{
    for (let i = 1; i <= 100; i++)
        console.log(i + '\t');
}
//calling the function 
printNumber1To100();
//creating date object
let d = new Date();

printDate = () => console.log(d.toDateString());
printDate()
/**
 * @description function to convert from celsius to fahrenheit
 * @param celsius 
 */
convertCelsiusToFahrenheit = (celsius) => (1.8 * celsius) + 32;

console.log(convertCelsiusToFahrenheit(23));


numArray = [1, 2, 3, 4, 5, 6];
/***
 * @description function to print average of numbers 
 * @param numArray integer array
 * 
 */
printAverage = (numArray) => {
    sum = numArray.reduce((val, val2) => val + val2);
    console.log(sum / numArray.length);
}
printAverage(numArray);

/**
 * @description function to reverse word
 * @param nameVar word to reverse
 */
printReverseWord=(nameVar)=>nameVar.split("").reverse().join("");
console.log(printReverseWord("Madaiii"))
