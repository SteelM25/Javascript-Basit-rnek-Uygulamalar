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
    if(sayi[i] == "1" || sayi[i] == "0" || sayi<0 && sayi!=""){ //Girilen değerin binary olması için bazı şartlar

        if(sayi[i] == "1"){
            sonuc=(sonuc*2)+1;
        }
        else if(sayi[i]=="0"){
            sonuc= sonuc*2;
        }
        if(i==(sayi.length-1)){ //yani i son değerdeyse artık son işlemleri yapıyoruz.
            if(sayi[0]=="-"){
                sonuc = ("-"+sonuc)
            }
            alert(sonuc)
        }
    }
      
    else{
        alert("Lütfen sadece 0 ve 1 rakamlarını içeren bir değer giriniz");
    }
}

//--------------

//* 2. Yöntem


/*
  !Örnek: 1001 = 9
    
  ? 1001 içinde sağdan sola doğru dolaşalım. 2° dan başlayarak üsler artacak şekilde başa kadar ilerlesin ve her sonuç karşılık geldiği değerle çarpılsın ve hepsi toplansın. (Sağdan sola gidilecek UNUTMA)

  * yani: 2**0 x 1 + 2**1 x 0 + 2**2 x 0 + 2**3 x 1 = 9  
  

*/
// function decimaltoBinary(binary){

//     let toplam = 0;
    
//     let us  = 0;


//     for(let i = binary.length - 1; i >= 0; i--){
//         toplam+= Number(binary.charAt(i)) * Math.pow(2,us);
//         us++;
//     }
//     alert(`${binary} değerinin Decimal karşılığı: ${toplam}`)
// }

// let binary = prompt("Decimal değeri bulunacak Binary sayısını giriniz: ")

// decimaltoBinary(binary)