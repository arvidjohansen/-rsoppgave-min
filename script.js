

console.log("hei");


var cookieEl = document.getElementById("cookie");

var clickCounter = 0;

function click(e){
    clickCounter += 1;
    document.getElementById("clickCounter").innerHTML = clickCounter;
}

cookieEl.addEventListener("click",click);