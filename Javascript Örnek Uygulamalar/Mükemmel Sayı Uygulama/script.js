/*
    ? Mükemmel Sayı: Bir sayının bölenlerinin toplamı sayının 2 katına eşitse o sayıya Mükemmel sayı denir

    * 6'nın bölenleri: 1+2+3+6 = 12(6×2)
    * 28'in bölenleri: 1+2+4+7+14+28 = 56(28×2) 
*/

//todo: kullanıcının girdiği sayıya kadar olan mükemmel sayıları bul


// debugger;
let girilenSayi = Number(prompt("Girdiğiniz sayıya kadar olan sayılardan mükemmel sayıları bulurum: "));

function mukBul(MaxSayi){

    let mukemmeller = [];
    
    for (let i = 2; i <= MaxSayi; i++) { //? Burada i, bölenleri bulunacak olan sayıyı temsil ediyor.
        let toplam = 0;
        for(let b=1; b <= i; b++) { //? b, i içinde dolaşıp böleni olup olmadığını buluyor.
    
            if(i%b==0){ //* sağıyorsa demek ki b sayının bölenidir
                toplam+=b; //? bölenler toplamı toplam değişkeninde tutuluyor
                if(toplam==(i*2)){
                    mukemmeller.push(i);
                }
            }
        }
    }  
     
    alert("Girdiğiniz sayıya kadar olan mükemmel sayılar: "+mukemmeller.join(" , "));
}

mukBul(girilenSayi);

//github desktop deneme 

