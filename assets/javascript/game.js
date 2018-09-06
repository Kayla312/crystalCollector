// crystal counter values
var crystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];

// numbers for the random number to pull from 1-120
// pushes the random number to the console for the FIRST TIME EVER WHOOP WHOOOP!!!!
var generateRandomNumber = function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max+1 - min))
  }

var numbers = generateRandomNumber(19, 120);

console.log(numbers);

var totalScore;


// counts wins and losses
var wins = 0;
var losses = 0;

// random number assigned to ruby
var rubyNumber = function(){
    crystals[Math.floor(Math.random() * crystals.length)]
};
updateRubyNumber = function() {
    $('#ruby').hmtl(totalScore);
}
// random number assigned to sapphire
var sapphireNumber = [];
// random number assigned to emerald
var emeraldNumber = [];

// // update random number that will reupdate every time tne game is lost or won
var updateRandomNumber = function() {
    document.querySelector('#random-number').innerHMTL = numbers;
};
updateRandomNumber();

if (totalScore === numbers)
then (wins++)



// PSUDO CODE FOR THE GAME!! ( IM GETTING MYSELF KINDA LOST WHEN I START TO JUMP AROUND)

// set each crystal up so that on game load they havd a random valuble, between 1-12
// have a random number between 19-120 established and posted on the HMTL to compare against
// on each click of any crystal the total score adjusts accurately.
// IF ELSE LOOP!
// if the random number and the total score match, add 1 point to wins
// reset the random number and crystal values
// if the total score overshoots the random number value, add one point to losses
// reset the random number and crystal values




