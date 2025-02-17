function generuj(){
const smallLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const bigLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const num = ['1','2','3','4','5','6','7','8','9','0'];
const krzesla = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','<','>','?','/'];

let haslo = "";

let smolgen = Math.floor(Math.random()*(25-0)+0);
let biggen = Math.floor(Math.random()*(25-0)+0);
let numgen = Math.floor(Math.random()*(10-0)+0);
let chargen = Math.floor(Math.random()*(18-0)+0);

haslo = haslo + smallLetters[smolgen];
haslo = haslo + bigLetters[biggen];
haslo = haslo + num[numgen];
haslo = haslo + krzesla[chargen];

let dlugosc = Math.floor(Math.random()*16+8);

for(let a=4;a<=dlugosc;a++){

let smolgen = Math.floor(Math.random()*(25-0)+0);
let biggen = Math.floor(Math.random()*(25-0)+0);
let numgen = Math.floor(Math.random()*(10-0)+0);
let chargen = Math.floor(Math.random()*(18-0)+0);

let od1do4 = [smallLetters[smolgen],bigLetters[biggen],num[numgen],krzesla[chargen]];

let losujkategorie = Math.floor(Math.random()*(4-0)+0);

let letter = od1do4[losujkategorie];

haslo = haslo + letter;

}

document.getElementById('pole').value = haslo;


}

function copy() {
    let tekst = document.getElementById("pole");
    tekst.select();
    tekst.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tekst.value);
    alert("Skopiowano");
  }