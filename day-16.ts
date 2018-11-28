/*

You run an e-commerce website and want to record the last N order ids in a log. Implement a
data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or
equal to N. You should be as efficient with time and space as possible.

*/

const N:number = 10;

let data:number[] = [];

function record( order_id:number ) {
	data.unshift(order_id);
	if(data.length > N){
		data.pop();
	}
}

function get_last( i:number ) {
	return data[i];
}

for(let x:number = 0; x <= N + ( Math.random() * 50 ); x++){
	record( Math.floor( Math.random() * 1000 ) );
}

const order_id:number = get_last( Math.floor( Math.random() * N ) );

console.log( 'The ith last element from the log is ' + order_id );


