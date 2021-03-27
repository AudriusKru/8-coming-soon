// IMPORT
//  hero
//    import {clock} from '';
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
import { suma, minus, multiply, divide } from './components/matematika.js';  
// sutraukta galima naudot bus maciau rasymo

const rez1 = suma(8, 5);
const rez2 = minus(8, 5);
const rez3 = divide(8, 5);
const rez4 = multiply(8, 5);

console.log(rez1);
console.log(rez2);
console.log(rez3);
console.log(rez4);
