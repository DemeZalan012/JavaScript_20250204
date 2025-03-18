let nap = 10; 
let napNev = "";
let napcucc = ((nap - 1) % 7) + 1;

switch (napcucc) {
    case 1:
        napNev = "hétfő";
        break;
    case 2:
        napNev = "kedd";
        break;
    case 3:
        napNev = "szerda";
        break;
    case 4:
        napNev = "csütörtök";
        break;
    case 5:
        napNev = "péntek";
        break;
    case 6:
        napNev = "szombat";
        break;
    case 7:
        napNev = "vasárnap";
        break;
}

console.log(napNev);
