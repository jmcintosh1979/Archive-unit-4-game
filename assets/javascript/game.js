// $("document").ready(function() {
  
// GLOBAL VARIABLES
var playerScore = 0;
var wins = 0;
var losses = 0;

var randomNumber = Math.floor((Math.random() * 120) + 19);
  console.log(randomNumber);

// var crystalValue = [
//   { blueCrystal: Math.floor((Math.random() * 12) + 1) },
//   { redCrystal: Math.floor((Math.random() * 12) + 1) },
//   { greenCrystal: Math.floor((Math.random() * 12) + 1) },
//   { purpleCrystal: Math.floor((Math.random() * 12) +1) },
// ];

// VARIABLES TO USE IF THE ABOVE "CRYSTALVALUE" DOES NOT WORK
var blueCrystal = Math.floor((Math.random() * 12) + 1);
  console.log(blueCrystal); 
var redCrystal = Math.floor((Math.random() * 12) + 1);
  console.log(redCrystal); 
var greenCrystal = Math.floor((Math.random() * 12) + 1);
  console.log(greenCrystal); 
var purpleCrystal = Math.floor((Math.random() * 12) + 1);
  console.log(purpleCrystal);

 
//FUNCTIONS
function reset() {
  playerScore = 0;
  $("#player-score").text(playerScore);
  randomNumber = Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
    $('#random-number').text(randomNumber);
  blueCrystal = Math.floor((Math.random() * 12) + 1);
    console.log(blueCrystal); 
  redCrystal = Math.floor((Math.random() * 12) + 1);
    console.log(redCrystal); 
  greenCrystal = Math.floor((Math.random() * 12) + 1);
    console.log(greenCrystal); 
  purpleCrystal = Math.floor((Math.random() * 12) + 1);
    console.log(purpleCrystal);
}

function verify() {
  if (playerScore === randomNumber) {
    wins++;
    $("#wins").text(wins);
    reset();
  }

  else if (playerScore > randomNumber) {
    losses++;
    $("#losses").text(losses);
    reset();
  }
}


// DISPLAY INITIAL COUNTS
$("#wins").text(wins);
$("#losses").text(losses);
$("#player-score").text(playerScore);
$('#random-number').text(randomNumber);



// MAIN PROCESS
$(".blue-crystal").on("click", function() {
  playerScore += blueCrystal;
  verify();
  $("#player-score").text(playerScore); 
})

$(".red-crystal").on("click", function() {
  playerScore += redCrystal;
  verify();
  $("#player-score").text(playerScore); 
})

$(".green-crystal").on("click", function() {
  playerScore += greenCrystal;
  verify();
  $("#player-score").text(playerScore); 
})

$(".purple-crystal").on("click", function() {
  playerScore += purpleCrystal;
  verify();
  $("#player-score").text(playerScore);    
})
