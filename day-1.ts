/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

// Initialize the k value
const k = Math.floor(Math.random()*100);

console.log( 'K value ' + k );

// Decide how long of array to build
const lengthOfArray = Math.floor(Math.random()*30);

let list: number[] = [];

for(let i = 0; i <= lengthOfArray; i++){
	const random = Math.floor(Math.random()*100);
	list.push(random);
}

console.log( 'Random List ' + list );

// Logic, create 2nd array with difference between
// list value and target, if value is found then return true
function findMatchingSum(list, k){

	let value: number[] = [];

	for(let i = 0; i<= list.length; i++){
		// if value is greater then k conitnue
		if(list[i] >= k ){
			continue;
		}
		if( -1 != value.indexOf(list[i]) ){
			return true;
		}
		// add required value to value list
		value.push(k-list[i]);

	}

	// default to returning false
	return false;
}

const match = findMatchingSum( list, k );

console.log( 'Sum k exists in list ' + match );
