/*
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/

class cons {
	first:number;
	last:number;

	constructor( a, b ) {
		this.first = a;
		this.last = b;
	}
}

function car(pair:cons){
	return pair.first;
}

function cdr(pair:cons){
	return pair.last;
}

const pair = new cons(3,4);

// For example, car(cons(3, 4)) returns 3,

console.log( 'car(cons(3, 4)) returns ' + car(pair) );

// cdr(cons(3, 4)) returns 4.

console.log( 'cdr(cons(3, 4)) returns ' + cdr(pair) );