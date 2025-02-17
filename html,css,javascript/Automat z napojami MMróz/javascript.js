let suma = 0;
function sumowanie(ile){
    if(czy_wypisalo ==true){
        document.getElementById("suma").innerHTML = ` `;
        document.getElementById("produkt").innerHTML = ` `;
        suma = 0;
        czy_wypisalo = false;
    }
    else if(ile == "50"){
        suma+=0.5;
    }
    else if(ile == "1"){
        suma+=1;
    }
    else if(ile == "2"){
        suma+=2;
    }
    else if(ile == "5"){
        suma+=5;
    }
    document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
}
let czy_wypisalo = false;
function wybieranie(ktory){
    if(ktory == "1" && suma>= 2.5){
        document.getElementById("produkt").innerHTML = `Otrzymałeś: <img style="width: 80px; height:auto;" src="1.png"></img> oraz ${suma-2.5} zł reszty.`;
        suma-=2.5;
        document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
        czy_wypisalo = true;
    }
    else if(ktory == "2" && suma>= 2.5){
        document.getElementById("produkt").innerHTML = `Otrzymałeś: <img style="width: 80px; height:auto;" src="2.png"></img> oraz ${suma-2.5} zł reszty.`;
        suma-=2.5;
        document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
        czy_wypisalo = true;
    }
    else if(ktory == "3" && suma>= 3){
        document.getElementById("produkt").innerHTML = `Otrzymałeś: <img style="width: 60px; height:auto;" src="3.png"></img> oraz ${suma-3} zł reszty.`;
        suma-=3;
        document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
        czy_wypisalo = true;
    }
    else if(ktory == "4" && suma>= 3.5){
        document.getElementById("produkt").innerHTML = `Otrzymałeś: <img style="width: 90px; height:auto;" src="4.png"></img> oraz ${suma-3.5} zł reszty.`;
        suma-=3.5;
        document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
        czy_wypisalo = true;
    }
    else if(ktory == "5" && suma>= 2){
        document.getElementById("produkt").innerHTML = `Otrzymałeś: <img style="width: 45px; height:auto;" src="5.png"></img> oraz ${suma-2} zł reszty.`;
        suma-=2;
        document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
        czy_wypisalo = true;
    }
    else if(ktory == "6" && suma>= 4){
        document.getElementById("produkt").innerHTML = `Otrzymałeś: <img style="width: 110px; height:auto;" src="6.png"></img> oraz ${suma-4} zł reszty.`;
        suma-=4;
        document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
        czy_wypisalo = true;
    }
    else{
        document.getElementById("produkt").innerHTML = `Niestarczyło ci gotówki. Wybierz inny produkt bądź odbierz gotówkę (${suma}zł)`;
        czy_wypisalo = true;
    }    
}
function wyplacanie(){
    if(suma != 0){
    document.getElementById("produkt").innerHTML = `Otrzymałeś swoją gotówkę z powrotem (${suma}zł)`;
    suma = 0;
    document.getElementById("suma").innerHTML = `Kredyt: ${suma} zł`;
    }
    else{
        document.getElementById("produkt").innerHTML = ` `;
    }

}






