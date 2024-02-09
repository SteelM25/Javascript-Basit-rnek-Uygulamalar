let genislik = document.querySelector("#genislik")
let yukseklik = document.querySelector("#yukseklik")
let arka_renk = document.querySelector("#arka_renk")
let kalinlik = document.getElementById("kalinlik")
let tip = document.querySelector("#tip")
let cerceve_renk = document.querySelector("#cerceve_renk")
let div_margin = document.querySelector("#div_margin")
let div_padding = document.querySelector("#div_padding")
let rotate = document.querySelector("#rotate")

let olustur = document.querySelector("#olustur")
let sag_taraf = document.querySelector(".sag")


olustur.addEventListener("click",div_olustur)

// function div_olustur(){
//     sag_taraf.style.width = genislik.value + "px"
//     sag_taraf.style.height = yukseklik.value + "px"
//     sag_taraf.style.backgroundColor =arka_renk.value
//     sag_taraf.style.borderWidth = kalinlik.value
//     sag_taraf.style.borderStyle = tip.value
//     sag_taraf.style.borderColor = cerceve_renk.value
//     sag_taraf.style.margin = div_margin.value + "px"
//     sag_taraf.style.padding= div_padding.value + "px"
//     sag_taraf.style.transform =`rotate(${rotate.value}deg)`;
// }

//template literal
function div_olustur(){
    
    sag_taraf.style.cssText = `
    
    width:${genislik.value}px;
    height:${yukseklik.value}px;
    background-color:${arka_renk.value};
    border-width:${kalinlik.value};
    border-style:${tip.value};
    border-color:${cerceve_renk.value};
    margin:${div_margin.value}px;
    padding:${div_padding.value}px;
    transform:rotate(${rotate.value}deg);

    `
}