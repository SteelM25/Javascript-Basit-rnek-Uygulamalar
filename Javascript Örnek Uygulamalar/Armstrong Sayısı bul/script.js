// * Bir sayının her bir rakamının sayının basamak adedi kadar üssü alınıp toplandığında sayının kendisini veriyorsa o sayı Armstrong bir sayıdır. Mesela 3 basamaklı bir sayının her rakamının 3.kuvveti(küpü) alınıp birbirleriyle toplandığında sayının kendisini veriyorsa o sayı Armstrong bir sayıdır. Aynı şekilde 4 basamaklı bir sayı için de her sayının 4. kuvveti alınır. 
//!Basamak adedince küpü alınır yani.


// !Örnek:

// ? 153 = 1³ + 5³ + 3³
// ? 370 = 3³ + 7³ + 0³
// ? 371 = 3³ + 7³ + 1³
// ? 407 = 4³ + 0³ + 7³

// todo: 10000'e kadar olan armstrong sayıları yazdır.

let armstrong = [];
// debugger;
for (let a = 1; a <= 10000; a++) {
  let kupToplam = 0;

  for (let b = 0; b < a.toString().length; b++) {
    let sayiDizi = a.toString().split("");

    // console.log(Number(sayiDizi[b])**sayiDizi.length); //sayının her bir rakamı üzerinde gezinip üssünü aldık.

    kupToplam += Number(sayiDizi[b]) ** sayiDizi.length;
  }

  if (kupToplam == a) {
    armstrong.push(kupToplam);
  }
}

console.log(`500'e kadar olan Armstrong sayıları: ${armstrong.join(" , ")}`);
