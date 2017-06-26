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
    var amount = parseInt($('.amountInput').val());
    var newMemory = new Memory(amount);
    var output = newMemory.countCards(amount);
    console.log(typeof amount);
    $('.cards').empty();
    output.forEach(function(i) {
      var newCard = new Card('widowmaker');
      $('.cards').append(newCard.html);
      $('.card').last().click(function() {
        $(this).toggleClass('flipped');
      });
    });
  });
  $('.card').click(function() {
    $(this).toggleClass('flipped');
  });
});
