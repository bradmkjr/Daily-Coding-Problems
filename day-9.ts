/*

Given a list of integers, write a function that returns the largest sum of
non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and
 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

*/

function largestSum(numbers: number[]){
  let sum: number = 0;

  numbers.forEach((n, i)=>{
    if(n <= 0) return;
    sum = n + sum;
    console.log(i);
  })
  return sum;
}

let numbers: number[];
let answer: number;

numbers = [2, 4, -6, 2, 5];

answer = largestSum( numbers );

console.log( "Largest Sum is " + answer );
