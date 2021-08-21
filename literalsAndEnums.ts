const flipCoin = (): 'Head' | 'Tail' => (Math.random() < 0.5 ? 'Head' : 'Tail');

console.log(flipCoin());

enum Suit {
  HEARTS = 'HEARTS',
  SPADES = 'SPADES',
  DIAMONDS = 'DIAMONDS',
  CLUBS = 'CLUBS',
}

console.log(Suit.DIAMONDS);
