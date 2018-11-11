/*

Implement a job scheduler which takes in a function f and an integer n,
and calls f after n milliseconds.

*/

function alertMessage(){
	console.log('Hello World');
}

function scheduler(f: Function, n: number){
	setTimeout(f,n);
}

const n: number = 5000;

scheduler(alertMessage, n);
