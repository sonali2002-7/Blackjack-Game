//let firstCard=getRandomCard()
//let secondCard=getRandomCard()
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerName="Sonali"
let playerChips=145
let playerEl=document.getElementById("player-el")
let player= {
    name:"sonali",
    chips:145
}
playerEl.textContent= player.name+": $" + player.chips

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber>10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    let cards=[ firstCard, secondCard]
    let sum=firstCard + secondCard
    renderGame()
}
function renderGame(){
    sumEl.innerText="sum: " + sum
    cardsEl.innerText="cards: " 
    for(i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }

    if (sum<=20){
        message="do you want to draw a new card?"
    }
    else if(sum === 21){
        message="Wohoo! you've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.innerText=message
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
