// javascript use get random card to reduce hard boiler code
let firstcard= randomCard()
let secondcard=randomcard()
let card=[firstcard, secondcard]
let sum = firstcard + secondcard
let hasblackjack=false
let isalive=true
let message=""

let messageEL=document.getElementById("messae")
console.log(messageEL)
let sumL=document.getElementById("sumel")
console.log(sumL)
let cardsL=document.getElementById("cardsEl")
console.log(cardsL)




// startgame function 
function rendergame()
{if( sum <= 20){
message="will you draw a new card!"
}else if(sum === 21){
    message=" you are winner"
    hasblackjack=true
}else {
    message=" you are looser"
    isalive=false
}
messageEL.textContent = message
sumL.textContent="sum: "+ sum
cardsL.textContent="Cards:" 
for (i=0;i< card.length;i++){
    cardsL.textContent+= card[i]+ " "
}

}
function startgame()
{
    rendergame()
}

function newcard()
{
    console.log("Drawing a new card from the deck!")
    let newcard=randomCard()
    sum+= newcard
   card.push(newcard)
   console.log(card)

   rendergame()
  
}


