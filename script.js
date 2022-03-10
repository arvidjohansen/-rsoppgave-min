
var cookieEl = document.getElementById("cookie");

var clickCounter = 0;
var clickCounterEl = document.getElementById("clickCounter");
var pointPerClick = 1;
var pointPerClickEl = document.getElementById("pointPerClick");
var powerup1El = document.getElementById("cookiePowerup1");
var powerup2El = document.getElementById("cookiePowerup2");
var formEl = document.getElementById("form");

function click(e){
    clickCounter += pointPerClick;
    clickCounterEl.innerHTML = clickCounter;
    formEl.currentScore.value = clickCounter;
}
function powerup1(e){
    pointPerClick += 2;
    pointPerClickEl.innerHTML = pointPerClick;
}
function powerup2(e){
    pointPerClick += 10;
    pointPerClickEl.innerHTML = pointPerClick;
}

cookieEl.addEventListener("click",click);
powerup1El.addEventListener("click",powerup1);
powerup2El.addEventListener("click",powerup2);


//Make background flash when clicked
function mousedown(e){
    cookieEl.style.backgroundColor = "black";
}
function mouseup(e){
    cookieEl.style.backgroundColor = "white";
}
cookieEl.addEventListener("mousedown",mousedown);
cookieEl.addEventListener("mouseup",mouseup);
powerup1El.addEventListener("mousedown", function(e){
    powerup1El.style.backgroundColor = "black";
})
powerup1El.addEventListener("mouseup", function(e){
    powerup1El.style.backgroundColor = "white";
})


