// Declare deck variables
let deckFull = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
let cardToRemove, turn, winner, player

// Cached element references
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('deck-4')


// Event listeners
document.getElementById('btn').addEventListener('click', handleClick)

// Functions

init()


function init() {
    turn = 1
    winner = false
    shuffDeck(deckFull)
    randDeck()
}

function shuffDeck(arr) {
  for (let i = arr.length - 1; i>=0; i--) {
    const idx = Math.floor(Math.random()*(i+1))
    arr.push(arr[idx])
    arr.splice(idx, 1)
  }
}

function randDeck() {
  deck1 = deckFull.slice(0,26)
  deck4 = deckFull.slice(26,52)
}
console.log(deck1)

function handleClick() {
    if (deck1.length > 0) {
        let randIdx = 0
        let cardPicked = deck1.splice(randIdx, 1)[0]
        deck2.push(cardPicked)
        render(cardPicked)
    }
}

function render(cardPicked) {
    if (deck2.length === 1) {
        deck2El.classList.remove('outline')
    }
    if (deck2.length > 1) {
        deck2El.classList.remove(cardToRemove)
    }
    cardToRemove = cardPicked

    deck2El.classList.add(cardPicked)

    if (deck2.length === 26) {
        deck2El.classList.add('shadow')
        deck1El.classList.remove('shadow')
    }
    if (deck1.length === 0) {
        deck1El.classList.add('outline')
        deck1El.classList.remove('back-red')
    }
}