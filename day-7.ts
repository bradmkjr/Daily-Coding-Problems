/*

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number
of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka',
and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

*/

// Great example of recursion, take character off start of string and repeat

function removeFirstCharacter(message: string, count: number){
	if( message === "" ){
		count = 1 + count;
		return count;
	}
	key.forEach((i)=>{
		if(message.lastIndexOf(i.toString(), 0) === 0){
			let newMessage = message.replace(i.toString(),"");
			count = removeFirstCharacter(newMessage, count);
		}
	});
	return count;
}

// add buffer to address 0 start array
const key:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

const code:string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let message: string;

let count: number = 0;

message = '111';

count = removeFirstCharacter(message, 0);

console.log( 'Message ' + message + ' can be decoded ' + count + ' different ways' );

message = '1321';

count = removeFirstCharacter(message, 0);

console.log( 'Message ' + message + ' can be decoded ' + count + ' different ways' );

message = '123454321';

count = removeFirstCharacter(message, 0);

console.log( 'Message ' + message + ' can be decoded ' + count + ' different ways' );

message = '121212121212';

count = removeFirstCharacter(message, 0);

console.log( 'Message ' + message + ' can be decoded ' + count + ' different ways' );