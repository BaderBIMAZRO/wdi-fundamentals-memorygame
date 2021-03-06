console.log("run test!");
let cards = [
            {
              rank:"queen",
              suit:"hearts",
              cardImage:"images/queen-of-hearts.png"
            },
            {
              rank:"queen",
              suit:"diamonds",
              cardImage:"images/queen-of-diamonds.png"
            },
            {
              rank:"king",
              suit:"hearts",
              cardImage:"images/king-of-hearts.png"
            },
            {
              rank:"king",
              suit:"diamonds",
              cardImage:"images/king-of-diamonds.png"
            }

];
let cardsInPlay = [];

function flipcard(){
        //accessing point
       let cardId = this.getAttribute('data-id');
       console.log("User flipped " + cards[cardId].rank);
       // get the image link
       this.getAttribute(cards[cardId].cardImage);
       // set it as src image to display it
       this.setAttribute('src', cards[cardId].cardImage);
       console.log(cards[cardId].suit);
       cardsInPlay.push(cards[cardId].rank)
       if(cardsInPlay.length == 2){
       if (cardsInPlay[0] === cardsInPlay[1]) {
       alert("You found a match!");
      } else {
       alert("Sorry, try again.");
     }
   }
}


function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipcard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}


createBoard();
