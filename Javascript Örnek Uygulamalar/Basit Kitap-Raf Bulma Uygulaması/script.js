let kitapAdi = document.querySelectorAll(".kitapAdi");
let degerInput = document.getElementById("KitapIsmi");
let araButton = document.getElementById("ara");
let books = document.querySelectorAll(".book");

araButton.addEventListener("click", function() {
    let deger = degerInput.value.trim().toLowerCase(); // Değeri alırken gereksiz boşlukları temizler ve küçük harfe dönüştürür
    
    kitapAdi.forEach(function(kitap, i) {
        if (kitap.textContent.toLowerCase().includes(deger)) {
            books[i].classList.add("bulunanKitap");
            books[i].textContent = kitap.textContent;
        } else {
            books[i].classList.remove("bulunanKitap");
            books[i].textContent = "";
        }
    });
});
