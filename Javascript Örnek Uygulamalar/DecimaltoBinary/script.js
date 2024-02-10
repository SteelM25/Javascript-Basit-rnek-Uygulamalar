/*
    * Bir sayıyı gittiği yere kadar her seferinde 2'ye böldüğümüzde sonucun başına en son bölüm, sonucun kalan kısmına ise sondan itibaren kalanlar yerleştirilerek bir sayının 2'lik sayı sistemindeki değeri bulunabilir.

    ? Mesela 13 sayısını 2'ye böldüğümüzde kalan 1, bölüm 6;
    ? 6 sayısını 2'ye böldüğümüzde kalan 0, bölüm 3;
    ? 3 sayısını 2'ye böldüğümüzde kalan 1, bölüm 1 olur, daha da tam 2'ye bölünmez.
    * sonuc: 1101

    ? 13/2 = kalan 1
    ? 6/2 = kalan 0
    ? 3/2 = kalan 1
    ? en son bölüm 1

    * En sondan yukarıya doğru yazdığımızda: 1101 sonucunu elde ederiz.

    ! Aslında her kalanı sonuc dizisinin başına ekleriz. Bölüm ilerledikçe ilk eklediğimiz sonda olur. En son da Bölümü başa ekleriz.


*/

//todo: Kullanıcının girdiği sayının 2'lik sayı sistemindeki değerini bul

function decimaltoBinary(sayi) {

  let binary = [];

  let deger = Math.abs(sayi);

  

  while ((Math.floor(deger / 2)) > 1) {
    binary.unshift((Math.floor(deger % 2)));
    deger = (Math.floor(deger / 2));
  }
  if ((Math.floor(deger / 2)) == 1) {
    binary.unshift((Math.floor(deger % 2)));
    binary.unshift((Math.floor(deger / 2)));
  }
  if((Math.floor(deger/2))==0){
    binary.unshift((Math.floor(deger)))
  }
  
  if(sayi<0){
    binary.unshift("-")
  }

  alert(`${sayi} sayısının 2'lik sayı sistemindeki değeri: ${binary.join("")}`);

}

let sayi = Number(
  prompt("2'lik sayı sistemindeki değerini bulmak istediğiniz sayıyı giriniz: ")
);

decimaltoBinary(sayi);
