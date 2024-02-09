let bebekler = document.getElementsByClassName("bebek")

document.onmousemove = function(e){
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";

    // bebekler[0].style.top = y;
    // bebekler[0].style.left = x;

    // bebekler[1].style.top = y;
    // bebekler[1].style.left = x;

    for(i=0;i<bebekler.length;i++){
        bebekler[i].style.top = y;
        bebekler[i].style.left = x;
        // bebekler[i].style.transform = "translate(-"+x+",-"+y+"";
        bebekler[i].style.transform = `translate(-${x},-${y})`;
    }
}