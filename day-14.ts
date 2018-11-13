/*

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a
Monte Carlo method.

Hint: The basic equation of a circle is x^2 + y^2 = r^2.

*/

const r = 1.0;

let ratio:number[] = [0,0];

for( let i = 0; i < 50000; i++){
  const dotX:number = ( Math.random() * 2 * r ) - r;
  const dotY:number = ( Math.random() * 2 * r ) - r;

  if( ( dotX*dotX + dotY*dotY ) <= r ){
	ratio[0] = 1 + ratio[0];
  }

  ratio[1] = 1 + ratio[1];
}

function calculatePi(ratio){
	return ( 4.0 * r *  ratio[0]/ratio[1] ).toFixed(3);
}

console.log( calculatePi( ratio ) );
