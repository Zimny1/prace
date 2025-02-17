let haslo = "cHuj";
haslo = haslo.toUpperCase();
const Alfabet = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź"];

let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

let haslo1="";
let bledy=0;


for(let a=0;a<haslo.length;a++){
    if(haslo.charAt(a)==" "){
        haslo1 += " ";
    }
    else{
        haslo1 += "-";
    }
}

function passRefresh(){
    document.querySelector("header").innerHTML = haslo1;
}

function StartLetters(){
    let Litery = "";

    for(let a=0;a<35;a++){
        Litery += '<div class="letter" id="L'+ a +'" onclick="sprawdz('+a+')">'+ Alfabet[a] +'</div>';

        if((a+1) % 7 == 0){
            Litery += '<div style="clear: both;"></div>';
        }
    }



    document.getElementById("right").innerHTML = Litery;

    passRefresh();
}

window.onload = StartLetters;

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substring(0, miejsce) + znak + this.substring(miejsce+1);
}

function sprawdz(nr){
    let trafiona=false;
    
    for(let a=0;a<haslo.length;a++){
        if(haslo.charAt(a)==Alfabet[nr]){
            haslo1 = haslo1.ustawZnak(a,Alfabet[nr]);
            trafiona = true;
        }

    }

    if(trafiona==true){
        yes.play();

        let el = "L" + nr;
        document.getElementById(el).style.backgroundColor = "rgba(5, 148, 0, 0.36)";
        document.getElementById(el).style.color = "rgba(5, 148, 0, 1)";
        document.getElementById(el).style.border = "9.6px solid rgba(5, 148, 0, 0.50)";
        document.getElementById(el).style.cursor = "default";

        passRefresh();
    }
    else{
        no.play();

        let el = "L" + nr;
        document.getElementById(el).style.backgroundColor = "rgba(148, 0, 0, 0.36)";
        document.getElementById(el).style.color = "rgb(148, 0, 0)";
        document.getElementById(el).style.border = "9.6px solid rgba(148, 0, 0, 0.5)";
        document.getElementById(el).style.cursor = "default";
        document.getElementById(el).removeAttribute("onclick");
        
        bledy++;
        document.getElementById("left").innerHTML = '<img src="img/s' + bledy + '.jpg" alt="cos poszlo nie tak" />';
    }
    //wygrana
    if(haslo==haslo1){
        document.getElementById("right").innerHTML = '<div class="Napis-reset">WYGRANA! Hasło to: ' + haslo + '</br></br><center><div class="reset" onclick="location.reload()">JESZCZE RAZ?</div></center>';
    }
    //przegrana
    if(bledy>=9){
        document.getElementById("right").innerHTML = '<div class="Napis-reset-przegrana">PRZEGRANA!</br>Koniec żyć, a twój kolega wisi.</br>Tego raczej sie nie wyklepie!</br>Hasłem było: ' + haslo + '</br></br><center><div class="reset-przegrana" onclick="location.reload()">JESZCZE RAZ?</div></center>';
    }


    passRefresh();
}