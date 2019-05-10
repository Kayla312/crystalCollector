// crystal counter values
var crystal = {
    sapphire:
        {
            name: "sapphire",
            value: 0
        },
    emerald:
        {
        name: "emerald",
        value: 0
        },
    ruby:
        {
        name: "ruby",
        value: 0
        },
    citrine:
        {
        name: "citrine",
        value: 0
        }
  };

var totalScore;


// counts wins and losses
var wins = 0;
var losses = 0;

var currentCount= 0;
var endGoal = 0;

// GLOBAL VARIABLES ^^^^^


// variable to generate a random number 
// pushes the random number to the console for the FIRST TIME EVER WHOOP WHOOOP!!!!
var generateRandomNumber = function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}

// var numbers = generateRandomNumber(19, 120);



// console.log(numbers);
var gameStart = function (){
    // sets baseline score of zero
    currentCount = 0;

    // generate a new random number to attempt to match
    endGoal = generateRandomNumber(19, 120);

    //random number ( between 1 and 12) assigned for each crystal 
    crystal.sapphire.value = generateRandomNumber(1,12);
    crystal.emerald.value = generateRandomNumber(1,12);
    crystal.ruby.value = generateRandomNumber(1,12);
    crystal.citrine.value = generateRandomNumber(1,12);

    $('#random-number').html('Number to Match: ' + endGoal );
    $('#whatYoureWorkingWith').html('Current Count: ' + currentCount );

    // Testing Console (cuz you NEVER KNOW WHEN SOMETHING IS GONNA BREAK)
    console.log("end goal BAY BAY " + endGoal);
    console.log(
    "Blue: " + crystal.sapphire.value + 
    " | Green: " + crystal.emerald.value + 
    " | Red: " + crystal.ruby.value +
    " | Yellow: " + crystal.citrine.value);
    console.log("********************************************");

};
// gameStart();

// Check if User Won or Lost and Reset the Game
var checkStatusOfGame = function() {

    // Check if currentCount is larger than endGoal
    if (currentCount > endGoal) {
        $('.modal').on( function () {
            $('#myInput').trigger('focus');
            $('winOrLose').html(
                "AW SAGE! Thats a loss. Gonna have to add that one in"
            );
          })
      console.log("You Lost");
  
      // Add to Loss Counter
      losses++;
  
      // Change Loss Count HTML
      $("#losses").text(losses);
  
      // Restart the game
      gameStart();
    }
  
    else if (currentCount === endGoal) {
        $('.modal').on( function () {
            $('#myInput').trigger('focus');
            $('winOrLose').html(
                "OKAY! I Selenite you! Thats a win! "
            );
          })
      console.log("You Won!");
  
      // Add to the Win Counter
      wins++;
  
      // Change Win Count HTML
      $("#wins").text(wins);
  
      // Restart the game
      gameStart();
    }
  
  };


  var addCrystalsUp = function(clickedCrystal) {

    // Change currentCount
    currentCount += clickedCrystal.value;
  
    // Change the HTML to reflect changes in currentCount
    $("#whatYoureWorkingWith").text(currentCount);
  
    // Call the checkWin Function
    checkStatusOfGame();
  
    // Testing Console
    console.log("Your Score: " + currentCount);
  };


  $('#sapphire').click(function(){
    addCrystalsUp(crystal.sapphire);
})
    $('#ruby').click(function(){
    addCrystalsUp(crystal.ruby);
})
    $('#emerald').click(function(){
    addCrystalsUp(crystal.emerald);
})
    $('#citrine').click(function(){
    addCrystalsUp(crystal.citrine);
})

gameStart();
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

// ***on page load, there are four crystals
    // each of the four crystals is assignes a random number between 1-12
    // every time the user clicks on a crystal it adds the accurate number to the total score
// *****on page load, there should also be a random number that is visible
    // ********the random number should be in between 19-120
// if the total score, after clicking on the crystals for a while, matches the random number that is visible
    // add 1 to the "won" area and alert the player that they have won
    // also reload the crystal values so that they are random
    // also also reload the random number on the page so that there is a new challenge
// however, should the user click on the wrong crystal too many times and overshoot the random number
    // add 1 to the 'lost' area and alert the player that they have lost that round
    // must again reloaad the crystal values so that they are once again new
    // also also reload the random number so that they can give another shot to beating the game


// ***= things i did do 
// also, the page looks nice.... which is great if you want it to look nice...maybe not so great if you want it to function 



