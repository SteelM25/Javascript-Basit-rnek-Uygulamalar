const deger = document.getElementById("degeri_al");

const programla = document.querySelector(".programla");
const baslat = document.querySelector(".baslat");
const durdur = document.querySelector(".durdur");

const kutu = document.querySelector(".kutu");
const saniye = document.querySelector(".deger");

const durum = document.querySelector(".durum");

// let a =5;

// //bir fonksiyonu belirtilen milsaniyede bir SÜREKLİ çalıştırır. Durdurmak istediğimiz şartta clearInterval() çağırılır.

/*Eğer clearInterval'i başka bir yerde aynı setIntervali durdurmak için çağırmak gerekiyorsa setIntervali bir değişkene atamak gerek, sonra da clearInterval yerine durdurulacak değişken ismi yazılır. Yani let x = setInterval()=>{kodlar}.. başka bir fonksiyonda bunu durdurmak için clearInterval(x) yaparız. */

// setInterval(() => {

//     if(a>0){
//         console.log(a)
//         a--;
//     }
//     else{
//         clearInterval();
//     }

// }, 1000);

programla.addEventListener("click", () => {
  saniye.innerHTML = deger.value;
});

let x;

baslat.addEventListener("click", () => {
  
    let degeri_al = Number(saniye.textContent)
    

        durum.classList.remove("gorun")


    x= setInterval(() => {
        
        if(degeri_al>0){
            deger.value =""
            degeri_al--;
            saniye.innerHTML = degeri_al.toString();
        }
        else{
            durum.classList.add("gorun")
            clearInterval(x);
        }

    }, 1000);

});


durdur.addEventListener("click",()=>{
    clearInterval(x)
})