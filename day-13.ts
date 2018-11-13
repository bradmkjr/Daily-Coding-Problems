/*

Given an integer k and a string s, find the length of the longest substring that
contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct
characters is "bcb".

*/

let max:string = "";

const s:string = "wviphbjjucxjmrnpicjtftzxrlbmixhyzofadgfbxwxzxthpyickuavazvaspolckat";

const k:number = 3;

for( let x = 0; x < s.length; x++ ){
	let w:string = s[x];
	if( w.length > max.length ){
		max = w;
	}
	for ( let y = (x + 1); y < s.length; y++ ){
		w += s[y];
		if( w.length > max.length ){
			let count:object = {};
			for( let u=0; u < w.length; u++){
				count[w[u]] = 1;
			}
			if( Object.keys(count).length <= k ){
				max = w;
			}
		}
	}
}

console.log( "the longest substring with k distinct characters is " + max );