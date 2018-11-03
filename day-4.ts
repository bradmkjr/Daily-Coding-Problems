/*

Given an array of integers, find the first missing positive integer in linear time and constant
pace. In other words, find the lowest positive integer that does not exist in the array. The
array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

*/

// Decide how long of array to build
const lengthOfArray = Math.floor(Math.random()*20);

// Build empty array to store random values
let list: number[] = [];

for(let i = 0; i <= lengthOfArray; i++){
	// const random = (Math.floor(Math.random()*20) - 10);
	const random = (Math.floor(Math.random()*10)-5);
	list.push(random);
}

console.log("Starting List "+list);

function lowestInteger(list:number[], length:number){

  for ( let x:number = 0; x < length; x++ ) {
    if ( list[x] >= 1 && list[x] <= length ) {
      const temp:number = list[list[x]];
      list[list[x]]=list[x];
      list[x]=temp;
    }
  }

  for ( let x:number = 1; x < length; x++ ) {
    if( list[x] != x ){
      return x;
    }
  }

  return lengthOfArray + 1;

}

let answer:number;

console.log("Sorted List "+list.sort(function (a, b) {  return a - b;  }));

answer = lowestInteger(list, lengthOfArray);

console.log("Answer is "+answer);
