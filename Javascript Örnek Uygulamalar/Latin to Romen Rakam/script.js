/*
    *Roma rakamları, rakamlar yan yana getirilerek ve rakam değerleri toplanarak yazılır. Örneğin 1 sayısı I şeklinde, 2 sayısı II şeklinde, 3 sayısı III şeklinde yazılır. 
    ! Ancak en fazla 3 tane aynı rakam yan yana gelebilir. 
    Örneğin 4 sayısını IIII şeklinde yazamayız. 
    ! 4 sayısını yazmak için bir tane 5 ve soluna 1 yazarız. Yani IV. 
    ?Buradan da anlaşılabileceği gibi eğer küçük olan rakam büyük rakamın solundaysa büyük rakamdan çıkarılır. Örneğin VI, IX gibi.
    
    ?6 sayısı VI, 7 sayısı VII, 8 sayısı VIII şeklinde yazılır. 
    !Buna göre de eğer küçük rakam büyük rakamın sağındaysa büyük rakamla toplanır.

    1948: MCMIIL
*/



//todo: Max 3999'a kadar yazılacak olan sayıyı romen rakamı şeklinde geri döndürecek kodu yaz.



  function toRoman(num) {
    if (typeof num !== 'number' || num < 1 || num > 3999) {
        return "Geçersiz sayı";
    }

    const romanNumerals = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    let result = '';

    Object.keys(romanNumerals).reverse().forEach(value => {
        while (num >= value) {
            result += romanNumerals[value];
            num -= value;
        }
    });

    return result;
}

// Örnek kullanım:
console.log(toRoman(1963)); // Çıktı: MCMLXLVIII
