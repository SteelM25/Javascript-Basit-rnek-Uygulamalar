let buttons = document.getElementsByTagName("button")
let ekran = document.querySelector(".ekran")

let hesapla = document.querySelector("#hesapla")
let temizle = document.querySelector("#temizle")

for(i=0;i<buttons.length;i++){
    if(buttons[i].value!="C" && buttons[i].value!="="){

        buttons[i].addEventListener("click",yazdir)

    }
    
}
function yazdir(){
    if(ekran.value.length<23){

        ekran.value += this.value;
    }
    else{
        ekran.value = "Max 23 karakter giriniz";
    }
}

hesapla.addEventListener("click",()=>{
    ekran.value = parseFloat( eval(ekran.value).toFixed(7))
})

temizle.addEventListener("click",()=>{
    ekran.value = "";
})

