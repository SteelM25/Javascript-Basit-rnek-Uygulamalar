let yukari = document.querySelector(".yukari_cik")


window.addEventListener("scroll",()=>{
    // console.log(window.scrollY)
    if(window.scrollY > 300){
        yukari.style.display = "block"
    }
    else{
        yukari.style.display = "none"
    }
})

yukari.addEventListener("click",function(){

    window.scrollTo(0,0)

})

yukari.addEventListener("mouseover",function(){
    yukari.innerHTML = "&uArr;";
})
yukari.addEventListener("mouseleave",function(){
    yukari.innerHTML = "Yukarı"
})
