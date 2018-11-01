/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

// Decide how long of array to build
const lengthOfArray = Math.floor(Math.random()*10);

// Build empty array to store random values
let list: number[] = [];

for(let i = 0; i <= lengthOfArray; i++){
	const random = Math.floor(Math.random()*10);
	list.push(random);
}

// Display Random List
console.log( 'Random List ' + list );

function productArray(list: number[]){
	let products: number[] = new Array();
	
	const listLength: number = list.length;

	for ( let x:number = 0; x < listLength; x++ ) {
		const seed = (listLength < 2)?0:1;
		products.push(seed);
		for ( let z = 0; z < listLength; z++ ) {
			if( x !== z ){
				products[x] *= list[z];	
			}
		}

	}
		
	return products;
}

const products = productArray( list );

console.log( 'Products are ' + products );
