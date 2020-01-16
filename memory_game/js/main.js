let cards = ["queen","queen","king", "king"];
let cardsInPlay = [];
function flipcard(cardId){
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId])
}
flipcard(0);
flipcard(2);
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}
checkForMatch();

/* if(cardsInPlay.length === 2){
  if(cardsInPlay[0]===cardsInPlay[1]){
    alert("You found a match!");
  }
  else{
    alert("Sorry try again!");
  }
} */
