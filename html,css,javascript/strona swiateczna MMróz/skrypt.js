function formularz(){

let wybor = document.getElementById("select").value;
let cenawyboru;

if(wybor==1){
    cenawyboru=40.99;
}
else if(wybor==2){
    cenawyboru=30.99;
}
else if(wybor==3){
    cenawyboru=45.99;
}


let ile = document.getElementById("ile").value;
let czystalyklient = document.getElementById("checkbox").checked;
let znizka = 0.9;
let calacena;

if(czystalyklient==true){
    calacena = (cenawyboru*ile)*znizka;
}
else{
    calacena = cenawyboru*ile;
}

console.log(calacena);
calacena = calacena.toFixed(2);
let wiadomoscklient = (czystalyklient) ? "jesteś stałym klientem i przyznano zniżkę 10%" : "nie jesteś stałym klientem i nie przyznano zniżki";

let wiadomosc = '<p>Złożono zamówienie</p></br><p>Łączna cena zamówienia to: ' + calacena + 'zł, ponieważ ' + wiadomoscklient + '</p>'

document.getElementById("mid").innerHTML = wiadomosc;


console.log("wybor: " + wybor + "   ile: " + ile + "   czyklient: " + czystalyklient + "   calacena: " + calacena + "   wiadomosc: " + wiadomosc + "   wiadomoscklient: " + wiadomoscklient);

}