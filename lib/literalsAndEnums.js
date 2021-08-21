"use strict";
const flipCoin = () => (Math.random() < 0.5 ? 'Head' : 'Tail');
console.log(flipCoin());
var Suit;
(function (Suit) {
    Suit["HEARTS"] = "HEARTS";
    Suit["SPADES"] = "SPADES";
    Suit["DIAMONDS"] = "DIAMONDS";
    Suit["CLUBS"] = "CLUBS";
})(Suit || (Suit = {}));
console.log(Suit.DIAMONDS);
//# sourceMappingURL=literalsAndEnums.js.map