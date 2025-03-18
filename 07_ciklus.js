for (let i = 1; i <= 5; i++) {
    console.log(i);
   } 

   let person = {name:"Pista", age:40, email:"pista@email.com"};

for (key in person) {
 console.log(key + " = " + person[key]);
} 


let cars = ["BMW", "Volkswagen", "Trabant"];

for (car in cars) {
 console.log(cars[car]);
}