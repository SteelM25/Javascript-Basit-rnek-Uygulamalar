//todo: Bir metinde kullanıcının belirttiği harfin kaç tane bulunduğunu function kullanarak yazdır.


let deger = prompt("Metin içerisindeki sayısını bulmak istediğiniz harfi yazınız")
let metin = document.getElementById("metin").textContent;
let sonuc = kacHarf(deger)



function kacHarf(harf){
    // debugger;

    let toplam = 0;

    for(let a = 0; a <metin.length; a++){

        if(metin[a].toLowerCase()== harf.toLowerCase()){
            toplam++;
        }
    }

    return toplam;
    


}

alert(`Harf sayısı ${sonuc} adet var`);



