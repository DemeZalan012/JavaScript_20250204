let a = prompt("Kérem adja meg a nevét", string);
console.log("Szia,"+ a)

let aa = prompt("Kérem adja meg a téglalap a oldalat: ");
let bb = prompt("Kérem adja meg b téglalap a oldalat: ");

let terulet = aa * bb;
console.log("A téglalap területe,", terulet);
let kerulet = (parseInt(aa) + parseInt(bb)) * 2;
console.log("A téglalap kerülete,", kerület);

let r = prompt("Kérem adja meg a kör sugarát: ")
korkerulet = (2 * parseInt(r)) * 3.14;
korterulet = (parseInt(r) * parseInt(r)) * 3.14;
console.log("A kör kerülete,", korkerulet);
console.log("A kör területe,", korterulet);