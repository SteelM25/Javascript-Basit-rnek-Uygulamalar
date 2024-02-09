function tamamlanmis(eleman) {
    eleman.addEventListener("click", function () {
      this.classList.toggle("tamam");
    });
  }
  
  function silinmis(sil) {
    sil.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
  
  var ul = document.querySelector("ul");
  var input = document.querySelector("input");
  
  function yeniListeEkle() {
    if (input.value !== "") {
      let liTag = `<li><span><i class="fa fa-window-close" aria-hidden="true"></i></span>${input.value}</li>`;
      ul.insertAdjacentHTML("beforeend", liTag);
  
      var yeniLi = ul.lastElementChild;
      tamamlanmis(yeniLi);
      silinmis(yeniLi.querySelector("span"));
  
      input.value = "";
    }
  }
  
  input.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      yeniListeEkle();
    }
  });
  
  
  