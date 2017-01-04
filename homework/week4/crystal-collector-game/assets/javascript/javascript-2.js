$( document ).ready(function(){
  var randomNumber=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(randomNumber);
  // Appending random number to the randomNumber id in the html doc
  //
  var gems = [10, 5, 3, 7];
  for (var i=0; i< numbers.length; i++){
      var imageCrystal = $('<img>');
      
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', 'http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
    }
});