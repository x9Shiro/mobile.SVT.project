function modif(b,t){
    var lb=document.getElementsByClassName("btt");
    var lt=document.getElementsByClassName("para");
    for(var i=0;i<lb.length;i++){lb[i].className="bt";}
    for(var i=0;i<lt.length;i++){lt[i].style.opacity=0;}
    b.className="btt";
    t.style.opacity=1;
}
function toggleMenu(x,y) {
    x.classList.toggle("change");
    y.style.opacity=1 - y.style.opacity;
    var buttons=y.getElementsByClassName("bt");
    for (var i=0;i<buttons.length;i++) {buttons[i].disabled = y.style.opacity == 0;}
}