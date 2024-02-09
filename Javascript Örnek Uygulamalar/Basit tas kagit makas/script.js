const oyuncu_skor = document.querySelector(".oyuncu_skor");
const bilgisayar_skor = document.querySelector(".bilgisayar_skor");

const tas = document.getElementById("tas");
const makas = document.getElementById("makas");
const kagit = document.getElementById("kagit");

const oyuncu_secimi = document.getElementById("oyuncu_secimi");
const bilgisayar_secimi = document.getElementById("bilgisayar_secimi");

const mesaj = document.querySelector(".mesaj");

let oyuncu = 0;
let bilgisayar = 0;

function bilgisayarSecim() {
  const secim = ["tas", "kagit", "makas"];

  let random = Math.floor(Math.random() * 3);

  bilgisayar_secimi.setAttribute("src", `imgs/${secim[random]}.jpg`);

  return secim[random];
}

function dinleyiciler() {
  tas.addEventListener("click", function () {
    oyuncu_secimi.setAttribute("src", "imgs/tas.jpg");
    let bil_secim = bilgisayarSecim();
    sonuc("tas",bil_secim)
  });
  kagit.addEventListener("click", function () {
    oyuncu_secimi.setAttribute("src", "imgs/kagit.jpg");
    let bil_secim = bilgisayarSecim();
    sonuc("kagit",bil_secim)
  });
  makas.addEventListener("click", function () {
    oyuncu_secimi.setAttribute("src", "imgs/makas.jpg");
    let bil_secim = bilgisayarSecim();
    sonuc("makas",bil_secim)
  });
}
dinleyiciler();

function sonuc(oyuncu,bilgisayar){

    switch(oyuncu + bilgisayar){

        case "tasmakas":
        case "kagittas":
        case "makaskagit":
            kazan();
            break;

        case "taskagit":
        case "kagitmakas":
        case "makastas":
            kaybet();
            break;

        default:
            berabere();
        
    }

}

function kazan(){

    oyuncu+=1;
    oyuncu_skor.innerHTML = oyuncu.toString();

    mesaj.innerHTML = "Tebrikler Kazandın"

}

function kaybet(){

    bilgisayar+=1;
    bilgisayar_skor.innerHTML = bilgisayar.toString();

    mesaj.innerHTML = "Kaybettin"

}

function berabere(){


    mesaj.innerHTML = "Berabere"

}