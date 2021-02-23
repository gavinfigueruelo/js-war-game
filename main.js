const player1 = prompt("Welcome, what is your name?");
// const player2 = prompt("Welcome player 2, what is your name?");
player2 = 'comp'

console.log(`Welcome ${player1}, and ${player2} Let's play war!`);

function Card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function Deck() {
  this.names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  this.cards = [];
  for (let s = 0; s < this.suits.length; s++) {
    for (let n = 0; n < this.names.length; n++) {
      this.cards.push(new Card(n + 1, this.names[n], this.suits[s]));
    }
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);

    const temporaryValue = array[i];
    array[i] = array[j];
    array[j] = temporaryValue;
  }

  return array;
}

const deck = new Deck();

const cards = deck.cards;

shuffle(cards);

const player1Hand = cards.splice(0, 26);
const player2Hand = cards.splice(0, 26);

let player1Cards = [];
let player2Cards = [];

let player1Card = player1Hand.pop();
let player2Card = player2Hand.pop();

while (player1Hand.length > 0 && player2Hand.length > 0) {
  if (player1Card.value === player2Card.value) {
    let player1NewCard = player1Hand.pop();
    let player2NewCard = player2Hand.pop();
    let player1WarChest = player1Hand.splice(0, 3);
    let player2WarChest = player2Hand.splice(0, 3);

  if (player1NewCard.value > player2NewCard.value) {
    player1WarChest.forEach((item) => {
      console.log(item);
      player1Hand.unshift(item);
    });

    player2WarChest.forEach((item) => {
      console.log(item);
      player1Hand.unshift(item);
    });
    player1Hand.unshift(player1Card, player2Card, player1NewCard, player2NewCard);

    console.log(player1Hand.length + player2Hand.length);
  } else {
    player1WarChest.forEach((item) => {
      console.log(item);
      player2Hand.unshift(item);
    });

    player2WarChest.forEach((item) => {
      console.log(item);
      player2Hand.unshift(item);
    });
    player2Hand.unshift(player1Card, player2Card, player1NewCard, player2NewCard);
    console.log(player1Hand.length + player2Hand.length);
  }
  console.log(player1Hand.length + player2Hand.length);
  } else if (player1Card.value > player2Card.value) {
    console.log(`${player1} won: ${player1Card.value} of ${player1Card.suit} and ${player2Card.value} of ${player2Card.suit}`);

    player1Hand.unshift(player1Card, player2Card);
    console.log(player1Hand.length);
    console.log(player2Hand.length);
    console.log(player1Hand.length + player2Hand.length);
  } else if(player1Card.value < player2Card.value){
    console.log(`${player2} won: ${player1Card.value} of ${player1Card.suit} and ${player2Card.value} of ${player2Card.suit}`);

    player2Hand.unshift(player2Card, player2Card);
    console.log(player1Hand.length);
    console.log(player2Hand.length);
    console.log(player1Hand.length + player2Hand.length);
  }

    player1Card = player1Hand.pop();
    player2Card = player2Hand.pop();
}

if (player1Hand.length < 0) {
  alert(`${player2} won the game!`);
} else {
  alert(`${player1} won the game!`);
}

// let player1 = new Player({
// });
//
// let player2 = new Player({
// });
//
// function Player({name = "computer", hand}){
//   this.name = name,
//   this.hand = hand;
// };
//
// player1.name = "gavin";
// player2.name = "comp";
// alert(' YOU HAVE ENTERED THE GAME OF WAR! ');
// console.log('Let The War Begin');
//
// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// function shuffle(deck) {
//   let shuffDeck = [];
//     for( i = 1; i <= 52;){
//     let r = getRandomArbitrary(0, 52);
//     if (!shuffDeck.includes(deck[r])){
//       shuffDeck.push(deck[r]);
//       i++;
//     }
//   } return shuffDeck;
// };
//
// let shuffledDeck = shuffle(cardArray);
// let p1hand = shuffledDeck.splice(0, 26);
// let p2hand = shuffledDeck;
// let cardsWon = [];
//
// const cardArray = [twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, sixOfClubs, sevenOfClubs, eightOfClubs, nineOfClubs, tenOfClubs, jackOfClubs, queenOfClubs, kingOfClubs, aceOfClubs,twoOfHearts, threeOfHearts, fourOfHearts, fiveOfHearts, sixOfHearts, sevenOfHearts, eightOfHearts, nineOfHearts, tenOfHearts, jackOfHearts, queenOfHearts, kingOfHearts, aceOfHearts, twoOfSpades, threeOfSpades, fourOfSpades, fiveOfSpades, sixOfSpades, sevenOfSpades, eightOfSpades, nineOfSpades, tenOfSpades, jackOfSpades, queenOfSpades, kingOfSpades, aceOfSpades,twoOfDiamonds, threeOfDiamonds, fourOfDiamonds, fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds, kingOfDiamonds, aceOfDiamonds];
//
// function Card({suit, symbol, value, used = false, index}){
//   this.suit = suit,
//   this.symbol = symbol,
//   this.value = value,
//   this.used = used,
//   this.index = index;
// };
//CLUBS
// let twoOfClubs = new Card({
//   suit:'♣',
//   symbol:'2',
//   value:2,
//   index:0,
// });
// let threeOfClubs = new Card({
//   suit:'♣',
//   symbol:'3',
//   value:3,
//   index:1,
// });
// let fourOfClubs = new Card({
//   suit:'♣',
//   symbol:'4',
//   value:4,
//   index:2,
// });
// let fiveOfClubs = new Card({
//   suit:'♣',
//   symbol:'5',
//   value:5,
//   index:3,
// });
// let sixOfClubs = new Card({
//   suit:'♣',
//   symbol:'6',
//   value:6,
//   index:4,
// });
// let sevenOfClubs = new Card({
//   suit:'♣',
//   symbol:'7',
//   value:7,
//   index:5,
// });
// let eightOfClubs = new Card({
//   suit:'♣',
//   symbol:'8',
//   value:8,
//   index:6,
// });
// let nineOfClubs = new Card({
//   suit:'♣',
//   symbol:'9',
//   value:9,
//   index:7,
// });
// let tenOfClubs = new Card({
//   suit:'♣',
//   symbol:'10',
//   value:10,
//   index:8,
// });
// let jackOfClubs = new Card({
//   suit:'♣',
//   symbol:'Jack',
//   value:11,
//   index:9,
// });
// let queenOfClubs = new Card({
//   suit:'♣',
//   symbol:'Queen',
//   value:12,
//   index:10,
// });
// let kingOfClubs = new Card({
//   suit:'♣',
//   symbol:'King',
//   value:13,
//   index:11,
// });
// let aceOfClubs = new Card({
//   suit:'♣',
//   symbol:'Ace',
//   value:14,
//   index:12,
// });
// //HEARTS
// let twoOfHearts = new Card({
//   suit:'♡',
//   symbol:'2',
//   value:2,
//   index:13,
// });
// let threeOfHearts = new Card({
//   suit:'♡',
//   symbol:'3',
//   value:3,
//   index:14,
// });
// let fourOfHearts = new Card({
//   suit:'♡',
//   symbol:'4',
//   value:4,
//   index:15,
// });
// let fiveOfHearts = new Card({
//   suit:'♡',
//   symbol:'5',
//   value:5,
//   index:16,
// });
// let sixOfHearts = new Card({
//   suit:'♡',
//   symbol:'6',
//   value:6,
//   index:17,
// });
// let sevenOfHearts = new Card({
//   suit:'♡',
//   symbol:'7',
//   value:7,
//   index:18,
// });
// let eightOfHearts = new Card({
//   suit:'♡',
//   symbol:'8',
//   value:8,
//   index:19,
// });
// let nineOfHearts = new Card({
//   suit:'♡',
//   symbol:'9',
//   value:9,
//   index:20,
// });
// let tenOfHearts = new Card({
//   suit:'♡',
//   symbol:'10',
//   value:10,
//   index:21,
// });
// let jackOfHearts = new Card({
//   suit:'♡',
//   symbol:'Jack',
//   value:11,
//   index:22,
// });
// let queenOfHearts = new Card({
//   suit:'♡',
//   symbol:'Queen',
//   value:12,
//   index:23,
// });
// let kingOfHearts = new Card({
//   suit:'♡',
//   symbol:'King',
//   value:13,
//   index:24,
// });
// let aceOfHearts = new Card({
//   suit:'♡',
//   symbol:'Ace',
//   value:14,
//   index:25,
// });
// //SPADES
// let twoOfSpades = new Card({
//   suit:'♠️',
//   symbol:'2',
//   value:2,
//   index:26,
// });
// let threeOfSpades = new Card({
//   suit:'♠️',
//   symbol:'3',
//   value:3,
//   index:27,
// });
// let fourOfSpades = new Card({
//   suit:'♠️',
//   symbol:'4',
//   value:4,
//   index:28,
// });
// let fiveOfSpades = new Card({
//   suit:'♠️',
//   symbol:'5',
//   value:5,
//   index:29,
// });
// let sixOfSpades = new Card({
//   suit:'♠️',
//   symbol:'6',
//   value:6,
//   index:30,
// });
// let sevenOfSpades = new Card({
//   suit:'♠️',
//   symbol:'7',
//   value:7,
//   index:31,
// });
// let eightOfSpades = new Card({
//   suit:'♠️',
//   symbol:'8',
//   value:8,
//   index:32,
// });
// let nineOfSpades = new Card({
//   suit:'♠️',
//   symbol:'9',
//   value:9,
//   index:33,
// });
// let tenOfSpades = new Card({
//   suit:'♠️',
//   symbol:'10',
//   value:10,
//   index:34,
// });
// let jackOfSpades = new Card({
//   suit:'♠️',
//   symbol:'Jack',
//   value:11,
//   index:35,
// });
// let queenOfSpades = new Card({
//   suit:'♠️',
//   symbol:'Queen',
//   value:12,
//   index:36,
// });
// let kingOfSpades = new Card({
//   suit:'♠️',
//   symbol:'King',
//   value:13,
//   index:37,
// });
// let aceOfSpades = new Card({
//   suit:'♠️',
//   symbol:'Ace',
//   value:14,
//   index:38,
// });
// //DIAMONDS
// let twoOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'2',
//   value:2,
//   index:39,
// });
// let threeOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'3',
//   value:3,
//   index:40,
// });
// let fourOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'4',
//   value:4,
//   index:41,
// });
// let fiveOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'5',
//   value:5,
//   index:42,
// });
// let sixOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'6',
//   value:6,
//   index:43,
// });
// let sevenOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'7',
//   value:7,
//   index:44,
// });
// let eightOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'8',
//   value:8,
//   index:45,
// });
// let nineOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'9',
//   value:9,
//   index:46,
// });
// let tenOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'10',
//   value:10,
//   index:47,
// });
// let jackOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'Jack',
//   value:11,
//   index:48,
// });
// let queenOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'Queen',
//   value:12,
//   index:49,
// });
// let kingOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'King',
//   value:13,
//   index:50,
// });
// let aceOfDiamonds = new Card({
//   suit:'♢',
//   symbol:'Ace',
//   value:14,
//   index:51,
// });
