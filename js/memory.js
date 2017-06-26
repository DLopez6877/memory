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
