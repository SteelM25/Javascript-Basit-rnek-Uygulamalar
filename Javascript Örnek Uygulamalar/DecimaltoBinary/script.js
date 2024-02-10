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

  let deger = Math.abs(sayi);//aldığım sayının mutlak değerini alarak işleme devam edeceğim. Çünkü floor ile aşağı yuvarlama işlemleri yapacağım için negatif sayılarda sorun olur.
  

  while ((Math.floor(deger / 2)) > 1) { //2'ye bölünebildiği sürece döngü döner
    binary.unshift((Math.floor(deger % 2))); // her bulduğum kalanı başa ekleyerek sonradan eklediğimin her sayının en başta olmasını sağlıyorum.
    deger = (Math.floor(deger / 2));//bölme işlemi sayının bölüm kısmından devam etsin.
  }
  if ((Math.floor(deger / 2)) == 1) { //son 2'ye bölme işlemi
    binary.unshift((Math.floor(deger % 2)));//son kalan başa eklenir
    binary.unshift((Math.floor(deger / 2)));//son bölüm başa eklenir(en başa)
  }
  if((deger==0)){//0'ın 2'lik sistemdeki değeri 0'dır.if(deger/2==0) da diyebilirdim. 0/2 = 0;
    binary.unshift((Math.floor(deger)))
  }
  
  if(sayi<0){ // negatif sayının binary degeri normal degerinin negatif halidir. O yüzden yukarıda mutlak degeri üzerinden işlem yaptığım sayı eğer negatif ise başına - işareti ekledim.
    binary.unshift("-")
  }

  alert(`${sayi} sayısının 2'lik sayı sistemindeki değeri: ${binary.join("")}`);

}

let sayi = Number(
  prompt("2'lik sayı sistemindeki değerini bulmak istediğiniz sayıyı giriniz: ")
);

decimaltoBinary(sayi);
