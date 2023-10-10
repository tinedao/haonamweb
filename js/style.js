function openmenu(){
    document.getElementById("menu-m").style.display = "block";
}
function close_menu(){
    document.getElementById("menu-m").style.display = "none"; 
}
function info_btn(){
    document.getElementById("info-button").style.left = "-50px";
    document.getElementById("close-info-form").style.left = "10px";
}
function close_form(){
    document.getElementById("info-button").style.left = "0";
    document.getElementById("close-info-form").style.left = "-320px";
}


function open_nav_mobile_1(){
    document.getElementById("plus1").style.display = "none";
    document.getElementById("minus1").style.display = "block";
    document.getElementById("open-nav-1").style.display = "block";
}
function close_nav_mobile_1(){
    document.getElementById("plus1").style.display = "block";
    document.getElementById("minus1").style.display = "none";
    document.getElementById("open-nav-1").style.display = "none";
}
function open_nav_mobile_2(){
    document.getElementById("plus2").style.display = "none";
    document.getElementById("minus2").style.display = "block";
    document.getElementById("open-nav-2").style.display = "block";
}
function close_nav_mobile_2(){
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "none";
    document.getElementById("open-nav-2").style.display = "none";
}