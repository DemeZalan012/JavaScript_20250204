console.log (5 == "5"); //true
console.log (5 === "5"); //false
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(typeof(5))
console.log(typeof("5"))

let a = 6;
console.log(`a: ${a}`)
console.log(!(a < 5))

console.log("LOGIKAI OPERÁTOR")
console.log(a > 5 && a < 20)
console.log("Check type")
console.log(a > 5 && typeof a === "number")
consoel.log(a === 3 || a === 6)

let z;
z=3+4; // összeadás
z=3-4; // kivonás
z=2*3; // szorzás
z=2/3; // osztás
z=3%2; // modulo
z=3**2; // hatványképzés (hatványalap**hatványkitevő)

let x,y;
x=5;
y=++x; // preinkrement
console.log(`x=${x}, y=${y}`);
x=5;
y=x++; // posztinkrement
console.log(`x=${x}, y=${y}`);
x=5;
y=--x; // predekrement
console.log(`x=${x}, y=${y}`);
x=5;
y=x--; // posztdekrement
console.log(`x=${x}, y=${y}`);

