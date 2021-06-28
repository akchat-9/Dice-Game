let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player2 Wins🚩";

} else {
    document.querySelector("h1").innerText = "🚩Player1 Wins";

}