const planetData = {

Mercury: "Mercury is the closest planet to the Sun and the smallest planet.",

Venus: "Venus is the hottest planet with thick toxic clouds.",

Earth: "Earth is the only known planet that supports life.",

Mars: "Mars is the red planet and a target for future human missions.",

Jupiter: "Jupiter is the largest planet and has the Great Red Spot.",

Saturn: "Saturn is famous for its beautiful rings.",

Uranus: "Uranus rotates on its side and appears blue-green.",

Neptune: "Neptune is the farthest planet and has extremely strong winds."

};

const planets = document.querySelectorAll(".planet");

planets.forEach(planet => {

planet.addEventListener("click", function(){

planets.forEach(p => p.classList.remove("zoom"));

this.classList.add("zoom");

const name = this.dataset.name;

document.getElementById("planet-info").innerHTML =
"<h2>"+name+"</h2><p>"+planetData[name]+"</p>";

});

});