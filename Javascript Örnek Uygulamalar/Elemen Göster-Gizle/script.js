const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const daireler = document.querySelector(".daireler")

const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")

b1.addEventListener("click",goster)
b2.addEventListener("click",gizle)
b3.addEventListener("click",toggle)

function goster(){
    // daireler.style.display = "block"
    daireler.classList = "daireler goster"
}
function gizle(){
    // daireler.style.display = "none"
    daireler.classList = "daireler gizle"
}
function toggle(){
    daireler.classList.remove("goster")
    daireler.classList.toggle("gizle");
}