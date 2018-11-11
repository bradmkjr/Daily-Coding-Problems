/*

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you can climb the staircase.
The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number
from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5
steps at a time.

*/

let position:number = 0;

let count:number = 0;

const N:number = 4;

const X:number[] = [1,2];


function step( position:number, N:number, X:number[], count:number ){

	X.forEach(( x )=>{
		if( N == position + x ){
			count = 1 + count;
		}else if ( N > position + x ){
			count = step( ( x + position ), N, X, count);
		}
	})

	return count;
}

const result = step( position, N, X, count);

console.log( 'Unique ways you can climb the staircase is ' + result );
