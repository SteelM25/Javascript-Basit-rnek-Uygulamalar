/*
    !Örnek: 1001 = 9
    
    ? 1001 içinde dolaşalım. dolaşacak elemanın değeri 0 olsun, elemana i diyelim.
    ? elemanın karşılık geldiği değer 1 ise i= (i×2)+1 olarak değerlendir,
    ? karşılık geldiği değer 0 ise i= (i×2) olarak değerlendir.
*/

// todo: Girilen bir binary sayısının decimal değerini bul


let sayi = prompt("Decimal değeri bulunacak Binary sayısını giriniz: ")


let sonuc = 0;

for(i in sayi){
    if(sayi[i] == "1" || sayi[i] == "0" || sayi<0 && sayi!=""){

        if(sayi[i] == "1"){
            sonuc=(sonuc*2)+1;
        }
        else if(sayi[i]=="0"){
            sonuc= sonuc*2;
        }
        if(i==(sayi.length-1)){
            if(sayi[0]=="-"){
                sonuc = ("-"+sonuc)
            }
            alert(sonuc)
        }
    }
      
    else{
        alert("Lütfen 0 ve 1 içeren bir değer giriniz");
    }
}

