(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Card(character) {
  this.html = '<div class="card-container">' +
                '<div class="card">' +
                  '<div class="front"></div>' +
                  '<div class="back' + " " + character +'"></div>' +
                '</div>' +
              '</div>';
}

exports.cardModule = Card;

},{}],2:[function(require,module,exports){
function Memory(amount) {
  this.heroes = ["hanzo", "lucio", "mercy", "reaper", "tracer", "widowmaker", "zenyatta"] ;
  this.amount = amount;
}

Memory.prototype.pullHero = function(hero) {
  var background = Math.floor(Math.random()*heroes.length);
  heroes.splice(background, 1);

  
}

Memory.prototype.countCards = function(amount) {
  var output = [];
  for (var i = 1; i <= amount; i++) {
    output.push(i);
  }
  return output;
}

exports.memoryModule = Memory;

},{}],3:[function(require,module,exports){
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

},{"./../js/card.js":1,"./../js/memory.js":2}]},{},[3]);
