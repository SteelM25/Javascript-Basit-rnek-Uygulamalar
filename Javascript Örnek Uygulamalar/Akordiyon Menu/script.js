let butonlar = document.querySelectorAll(".akordiyon")

for(i=0;i<butonlar.length;i++){
    butonlar[i].onclick=function(){
        let sonraki = this.nextElementSibling;
        this.lastElementChild.classList.toggle("fa-chevron-down")
        this.lastElementChild.classList.toggle("fa-chevron-up")

        if(sonraki.style.maxHeight){
            sonraki.style.maxHeight = null;
        }
        else{
            sonraki.style.maxHeight = sonraki.scrollHeight + "px";
        }
    }
}