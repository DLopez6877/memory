$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    
  });
});

var Memory = require('./../js/memory.js').memoryModule;
var Card = require('./../js/card.js').cardModule;

$(document).ready(function() {
  $('#memory-form').submit(function(event) {
    event.preventDefault();
    var amount = $('.amountInput').val();
    var newMemory = new Memory(amount);
    var output = newMemory.countCards(amount);
    $('.cards').empty();
    output.forEach(function(i) {
      var newCard = new Card('widowmaker');
      $('.cards').append(newCard.html);
    });
  });
});


$(document).ready(function() {
  $('.card').click(function() {
    $(this).toggleClass('flipped');
  });
});
