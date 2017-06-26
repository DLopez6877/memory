
function Card(character) {
  this.html = '<div class="card-container">' +
                '<div class="card">' +
                  '<div class="front"></div>' +
                  '<div class="back' + " " + character +'"></div>' +
                '</div>' +
              '</div>';
}

exports.cardModule = Card;
