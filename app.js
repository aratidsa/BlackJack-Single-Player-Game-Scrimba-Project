/* ---------------------  Declaration --------------------------- */

let cards = []
let sum = 0
hasBlackJack = false
isAlive = false
let message = " "

let displayMessage = document.querySelector('.message')
let displaySum = document.querySelector('.total')
let displayCards = document.querySelector('.cards-drawn')

let beginGame = document.querySelector('.start-btn')
let newCard = document.querySelector('.new-card-btn')
let newGame = document.querySelector('.new-game-btn')

/* ---------------------  Event Listeners --------------------------- */

beginGame.addEventListener('click',startGame)
newCard.addEventListener('click',addNewCard)
newGame.addEventListener('click',startNewGame)

/* ---------------------  generate random cards --------------------------- */

function getRandomCards()
{
    let randomNumber = Math.floor(Math.random() * 13) + 1

   /* --------------------- value of cards between 11 to 13 [ie. JKQ]--------------------------- */ 
    if(randomNumber > 10)
    {
        return 10
    }
    /* ---------------------  value of Ace card --------------------------- */
    else if(randomNumber === 1)
    {
        return 11
    }
    else
    {
        return randomNumber
    }
}

/* ---------------------  start the game --------------------------- */
function startGame()
{   
    isAlive = true
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    /* ---------------------  array of cards --------------------------- */
    cards = [firstCard, secondCard]
    /* ---------------------  sum of cards --------------------------- */
    sum = firstCard + secondCard
    renderGame()
}

/* --------------------- working of the game --------------------------- */
function renderGame()
{
    /* --------------------- display cards and sum of cards --------------------------- */
    displayCards.innerHTML = "Cards: "
    displaySum.innerHTML = "Sum: "
    for(let i = 0; i < cards.length; i++)
    {
        displayCards.textContent += cards[i] + " "
    }
    displaySum.innerHTML += sum
    if(sum < 20)
    {
        message = "Do you want to draw a new card? 🙂"
    }
    else if(sum === 21)
    {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game! 😭"
        isAlive = false
    }
  /* ---------------------  Display message --------------------------- */
    displayMessage.textContent = message
    /* --------------------- remove startgame event listener--------------------------- */
    beginGame.removeEventListener('click',startGame)
}

/* ---------------------  to add new cards--------------------------- */
function addNewCard()
{
    /* ---------------------  if blackjack is not got and you are not out of the game  --------------------------- */
    if(isAlive === true && hasBlackJack === false)
    {
        /* ---------------------  get a new card --------------------------- */
        let card = getRandomCards()
        /* ---------------------  add the new card to the sum and then display --------------------------- */
        sum += card
        /* ---------------------  add the new card in the display card element --------------------------- */
        cards.push(card)
        renderGame()
    }
}

   /* ---------------------  reset to start new game --------------------------- */
function startNewGame()
{
    displayCards.innerHTML = "Cards: "
    displaySum.innerHTML = "Sum: "
    displayMessage.textContent = " "
    cards = []
    sum = 0
    hasBlackJack = false
    isAlive = false
    firstCard = 0
    secondCard = 0
    beginGame.addEventListener('click',startGame)
    newCard.addEventListener('click',addNewCard)
}