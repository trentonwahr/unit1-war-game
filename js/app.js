// Declare deck variables
let deckFull = ["d14","d12","d13","d11","d10","d09","d08","d07","d06","d05","d04","d03","d02","h14","h12","h13","h11","h10","h09","h08","h07","h06","h05","h04","h03","h02","c14","c12","c13","c11","c10","c09","c08","c07","c06","c05","c04","c03","c02","s14","s12","s13","s11","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
let warDeck1 = []
let warDeck2 = []
let doubWar1 = []
let doubWar2 = []
let cardToRemove1, cardToRemove2, turn, winner, player


// Cached element references
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('deck-4')


// Event listeners
document.getElementById('flipbtn').addEventListener('click', handleClick)
document.getElementById('resetbtn').addEventListener('click', init)

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
// console.log(deck1)
// console.log(deck4)

function handleClick() {
    if (deck1.length > 0) {
        let randIdx = 0
        let cardPicked1 = deck1.splice(randIdx, 1)[0]
        deck2.push(cardPicked1)
        render1(cardPicked1)
    }
    
    if (deck4.length > 0) {
      let moreRandIdx = 0
      let cardPicked2 = deck4.splice(moreRandIdx, 1)[0]
      deck3.push(cardPicked2)
      render2(cardPicked2)
  }
  compare()
  console.log(deck1)
  console.log(deck4)
  console.log(deck2)
  console.log(deck3)
}

function render1(cardPicked1) {
  if (deck2.length === 1) {
      deck2El.classList.remove('outline')
  }
  if (deck2.length > 1) {
      deck2El.classList.remove(cardToRemove1)
  }
  cardToRemove1 = cardPicked1

  deck2El.classList.add(cardPicked1)

  if (deck2.length === 13) {
      deck2El.classList.add('shadow')
      deck1El.classList.remove('shadow')
  }
  if (deck1.length === 0) {
      deck1El.classList.add('outline')
      deck1El.classList.remove('back-red')
  }
}

function render2(cardPicked2) {
if (deck3.length === 1) {
  deck3El.classList.remove('outline')
}
if (deck3.length > 1) {
    deck3El.classList.remove(cardToRemove2)
}
cardToRemove2 = cardPicked2

deck3El.classList.add(cardPicked2)

if (deck3.length === 13) {
    deck3El.classList.add('shadow')
    deck4El.classList.remove('shadow')
}
if (deck4.length === 0) {
    deck4El.classList.add('outline')
    deck4El.classList.remove('back-red')
}
}

function compare() {
  if (parseInt(deck2[0].slice(-2)) > parseInt(deck3[0].slice(-2))) {
    let idx = 0
    cardWon1 = deck2.splice(idx, 1)[0]
    cardWon2= deck3.splice(idx, 1)[0]
    deck1.push(cardWon1)
    deck1.push(cardWon2)
  } else if (parseInt(deck3[0].slice(-2)) > parseInt(deck2[0].slice(-2))) {
    let idx = 0
    cardWon1 = deck2.splice(idx, 1)[0]
    cardWon2= deck3.splice(idx,1)[0]
    deck4.push(cardWon1)
    deck4.push(cardWon2)
  }
}
