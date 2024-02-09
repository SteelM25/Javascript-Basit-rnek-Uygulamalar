//*"Bir restoranda menüdeki yemekleri kontrol eden bir program yazmanız isteniyor. Kullanıcı bir yemek siparişi verdiğinde, o yemeğin içinde hangi malzemelerin olduğunu ekrana yazdıracak bir programı switch case kullanarak yazınız."

let yemekler = {
  Pizza: "Domates sosu, peynir, mantar, sosis, yeşil biber",
  Hamburger: "Kıyma, ekmek, marul, domates, turşu, peynir",
  Makarna: "Spagetti, domates sosu, parmesan peyniri, zeytinyağı",
  Salata: "Marul, salatalık, domates, zeytinyağı, limon suyu",
  Corba: "Sebzeler, et suyu, tuz, karabiber, un",
};

let altSatir = "\r\n";

let secim = prompt(
  "Yemekler" +
    altSatir +
    "1-Pizza" +
    altSatir +
    "2-Hamburger" +
    altSatir +
    "3-Makarna" +
    altSatir +
    "4-Salata" +
    altSatir +
    "5-Corba" +
    altSatir
);

switch (secim) {
    case "1":
        console.log("Pizza Malzemeleri: "+yemekler.Pizza);
        break;
    case "2":
        console.log("Hamburger Malzemeleri: "+yemekler.Hamburger);
        break;
    case "3":
        console.log("Makarna Malzemeleri: "+yemekler.Makarna);
        break;
    case "4":
        console.log("Salata Malzemeleri: "+yemekler.Salata);
        break;
    case "5":
        console.log("Çorba Malzemeleri: "+yemekler.Corba);
        break;
    default:
        console.log("Lütfen geçerli bir seçim yapınız.");
}
