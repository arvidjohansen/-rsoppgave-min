
var cookieEl = document.getElementById("cookie");

var clickCounter = 0;
var clickCounterEl = document.getElementById("clickCounter");

function click(e){
    clickCounter += 1;
    clickCounterEl.innerHTML = clickCounter;
}

function mousedown(e){
    cookieEl.style.backgroundColor = "black";
}

function mouseup(e){
    cookieEl.style.backgroundColor = "white";
}

cookieEl.addEventListener("mousedown",mousedown);
cookieEl.addEventListener("mouseup",mouseup);
cookieEl.addEventListener("click",click);

//cookieEl.addEventListener