// crystal counter values
var crystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];

var totalScore;


// counts wins and losses
var wins = 0;
var losses = 0;

// GLOBAL VARIABLES ^^^^^


// numbers for the random number to pull from 1-120
// pushes the random number to the console for the FIRST TIME EVER WHOOP WHOOOP!!!!
var generateRandomNumber = function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max+1 - min))
  }

var numbers = generateRandomNumber(19, 120);

$('#random-number').html('Number to Match: ' + numbers);

// console.log(numbers);

// ATTEMPTING A NEW WAY TO CREATE THE CRYSTALS RANDOM NUMBER
// when any of the attributs with the class btTxt submit are clicked (aka the crystals on the page) the function should fire
$('.btTxt submit').on('click', function () {
    
});

for(var i = 0; i < 4; i++){
    // getting a random number between 1-12 for each of the crystals
    var randomCrystal = [Math.floor(Math.random() * crystals.length)]
    // setting the random number as an attribute on each crystal
    var crystal
   crystal = $('#btxTxt')
   crystal.attr({
       'randomNumber': randomCrystal,
       
    
   });
   console.log(randomNumber)
}
// // random number assigned to ruby
// var rubyNumber = function(){
//     crystals[Math.floor(Math.random() * crystals.length)]
// };
// updateRubyNumber = function() {
//     $('#ruby').hmtl(totalScore);
// }
// // random number assigned to sapphire
// var sapphireNumber = [];
// // random number assigned to emerald
// var emeraldNumber = [];

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


// UNCOMPLETED CODE FOR THE GAME!!
// SO MUCH WAS UNCOMPLETED THAT I FEEL LIKE JUST RE-PSUDO CODING THE WHOLE GAME, AND THEN ATTEMPTING TO CODE IT AGAIN

// on page load, there are four crystals
    // each of the four crystals is assignes a random number between 1-12
    // every time the user clicks on a crystal it adds the accurate number to the total score
// on page load, there should also be a random number that is visible
    // the random number should be in between 19-120
// if the total score, after clicking on the crystals for a while, matches the random number that is visible
    // add 1 to the "won" area and alert the player that they have won
    // also reload the crystal values so that they are random
    // also also reload the random number on the page so that there is a new challenge
// however, should the user click on the wrong crystal too many times and overshoot the random number
    // add 1 to the 'lost' area and alert the player that they have lost that round
    // must again reloaad the crystal values so that they are once again new
    // also also reload the random number so that they can give another shot to beating the game





