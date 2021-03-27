// IMPORT
//  hero
//    main
//    footer


// FUNKCIJU NAUDOJIMAS
//      hero
//    main
//    footer


/* import ka from kur */
 /* import { suma } from './components/sum.js';
import { minus } from './components/minus.js';
import { divide } from './components/divide.js';
import { multiply } from './components/multiply.js';
*/
import { matematika } from './components/matematika.js';  
// sutraukta galima naudot bus maciau rasymo

const rez1 = matematika.sudeti(8, 5);
const rez2 = matematika.atimti(8, 5);
const rez3 = matematika.sudauginti(8, 5);
const rez4 = matematika.dalinti(8, 5);

console.log('Sudėjus gauname', '->', rez1);
console.log('Atėmus gauname', '->',rez2);
console.log('Sudauginus gauname', '->',rez3);
console.log('Padalinus gauname', '->',rez4);
