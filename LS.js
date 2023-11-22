var css1 = document.querySelector(".rgb");
var css2 = document.querySelector(".hex"); 
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Grandint");

function setGradient(){
        body.style.background = 
            "linear-gradient(to right, " + color1.value + ", "+ color2.value + ")";
        css1.textContent = body.style.background + ";";
        css2.textContent = "linear-gradient(to right, " + color1.value.toUpperCase() + "," + color2.value.toUpperCase() + ")" +";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);