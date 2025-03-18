/*1. feladat*/
let szam = prompt("Adj meg egy számot: ")
if (szam > -30 || szam < 40)
    {
        console.log("A szám benne van a 30-40 intervallumban")
    }
else
    {
        console.log("A szám nincs benne a 30-40 intervallumban")
    }

/*2.feladat*/
let szam3 = prompt("Adj meg egy számot : ")
let szam2 = prompt("Adj meg egy számot megint: ")
if (szam2 > szam3)
    console.log(`${szam2}nagyobb`)
else if (szam2 < szam3)
    console.log(`${szam2}nagyobb`)
else
    console.log("a két szám egyenlő")

/*3. feladat*/ 
let x = prompt("Add meg az x értékét: ")
if (x < 0)
    console.log("a szám előjele: -")
else if (x >= 0)
    console.log("a szám előjele: +")
else(x = 0)
    console.log("a szám 0")

/*4. feladat*/
let szam4 = prompt("Add meg az x értékét: ")
if (szam4 % 1 == 0)
    console.log(`a szám: ${szam4}, tehát nagyobb mint 0 you dumbass `)

/*5. feladat*/
let szam5 = prompt("Adj meg egy számot : ")
let szam6 = prompt("Adj meg egy számot megint: ")
if (szam5 > szam6)
    console.log(`az eredmény: ${szam5}>${szam6}`)
else if (szam5 < szam6)
    console.log(`az eredmény: ${szam6}>${szam5}`)
else (szam5 = szam6)
    console.log(`az eredmény: ${szam5}=${szam6}`)

let eletkor = prompt("Hány éves vagy: ")
if(eletkor < 6 && eletkor > 0)
    console.log(``)