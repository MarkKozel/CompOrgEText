/**
 * This program reads thru an array, and calculates the count
 * and average for all positive values
 */

let sum = 0;
let count = 0;

for (let i = 0; i < 10; i++) {
  if (myArray[i] > 0) {
    sum += myArray[i];
    count++;
  }
}

let average = sum / count;
console.log(`Found ${count} positive numbers with an Average of ${average}`)