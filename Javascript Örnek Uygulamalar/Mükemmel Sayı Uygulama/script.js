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
    
    for (let i = 2; i <= MaxSayi; i++) {
        let toplam = 0;
        for(let b=1; b <= i; b++) {
    
            if(i%b==0){ //* sağıyorsa demek ki sayının bölenidir
                toplam+=b;
                if(toplam==(i*2)){
                    mukemmeller.push(i);
                }
            }
        }
    }
    
    alert("Girdiğiniz sayıya kadar olan mükemmel sayılar: "+mukemmeller.join(" , "));
}

mukBul(girilenSayi);

