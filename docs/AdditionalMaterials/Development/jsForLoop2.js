/**
 * This program reads thru an array, and calculates the count
 * and average for all positive values
 */

// Init variable for results
let sum = 0;
let count = 0;

//Loop thru array looking for positive values
for (let i = 0; i < 10; i++) {
  if (myArray[i] > 0) { //Test for Positive
    sum += myArray[i];
    count++;
  }
}

//Calc and report results
let average = sum / count; //Calc average
console.log(`Found ${count} positive numbers with an Average of ${average}`)