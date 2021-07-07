// Code your solutions in this file
//function wrapGifts(string, event){
  //  newArray=[]
  //  for(i=0; i < wrapGifts.length;i++){
  //      console.log(`Thank you, ${string[i]}, for the wonderful ${event} gift!`)
  //      newArray.push(string[i])
  //  }

  //  return newArray
//}

function countDown(n) {
   let countdown = n;
   while (countdown >= 0) {
       console.log(countdown)
       countdown--
   }
}

//countdown(10)
//wrapGifts(["Ada", "Brendan", "Ali"], "birthday")
//writeCards(["Ada", "Brendan", "Ali"], "birthday"); 
const cards = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    cards[i] = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
  }

  return cards;
}

writeCards (cards)