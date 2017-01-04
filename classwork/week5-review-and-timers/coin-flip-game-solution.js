var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

$('#heads').on('click', function() {
  headsCount++;
  $('#headsChosen').html(headsCount);

  $('#guess').html('<b>Heads</b>');
  flipThatCoin(0);
});


$('#tails').on('click', function() {
  tailsCount++;
  $('#tailsChosen').html(tailsCount);

  $('#guess').html('<b>Tails</b>');
  flipThatCoin(1);
});

function flipThatCoin(result) {
  //STEP ONE: set a variable named randomNumber to either 1 or 2. Make it random
  var randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg" />');
  } else {
    $('#coin-image').html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg" />');
  }

  if (result === randomNumber) {
    wins++;
    $('#win-lose').html('<h2>Winner!</h2>');
    $('#wins').html('<h3>' + wins + '</h3>');
  } else {
    losses++;
    $('#win-lose').html('<h2>Loser!</h2>');
    $('#losses').html('<h3>' + losses + '</h3>');
  }
}
