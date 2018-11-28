/*

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to
represent repeated successive characters as a single count and character. For example, the
string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have
no digits and consists solely of alphabetic characters. You can assume the string to be
decoded is valid.

*/

const assert = require('assert');

const AssertionError = require('assert').AssertionError;

let output:string = "";

let input:string = "";

// https://stackoverflow.com/a/9716488
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function encode(input:string){
	let output:string = "";

	let count:number = 1;

	for(let i = 0; i < input.length; i++){
		if( input[i] != input[i+1] ){
			output += count + input[i];
			count = 1;
		}else{
			count += 1;
		}
	}

	return output;
}

function decode(input:string){
	let output:string = "";

	// console.log("Decoding: "+input);

	for(let i = 0; i < input.length; i++){
		if( isNumeric( input[i] ) ){
			for( let j = 0; j < parseInt(input[i]); j++ ){
				// console.log(input[i+1]);
				output += input[i+1];
			}
			i = i + 1;
		}
	}

	return output;
}

try {
    // Output test.
    console.log(`----- ASSERTING: output == "4A3B2C1D2A" -----`);

    input = "AAAABBBCCDAA";

    output = encode(input);

	assert.equal( output, '4A3B2C1D2A', 'Encode Failed');

    // Output confirmation of successful assertion.
    console.log(`----- CONFIRMED: output == "4A3B2C1D2A" -----`);
  } catch (e) {
    if (e instanceof AssertionError) {
      // Output expected AssertionErrors.
      console.log(e);
    } else {
      // Output unexpected Errors.
      console.log(e);
    }
  }

try {
    // Output test.
    console.log(`----- ASSERTING: output == "AAAABBBCCDAA" -----`);

    input = "4A3B2C1D2A";

    output = decode( input );

	assert.equal( output, 'AAAABBBCCDAA', 'Decode Failed');

    // Output confirmation of successful assertion.
    console.log(`----- CONFIRMED: output == "AAAABBBCCDAA" -----`);
  } catch (e) {
    if (e instanceof AssertionError) {
      // Output expected AssertionErrors.
      console.log(e);
    } else {
      // Output unexpected Errors.
      console.log(e);
    }
  }

console.log('Code completed');