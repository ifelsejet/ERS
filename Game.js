class Deck {
    cardArr = [];
    dealtCards = [];

    //Set - Up the deck
    constructor() {
        for(var i = 2; i <= 14; i++) {
            for(var j = 1; j <= 4; j++) {
                this.cardArr.push(new Card(j, i));
            }
        }

       // this.shuffle();
    }

    //Shuffle the deck
    shuffle() {
        var randIndex = 0;
        var tempVal = 0;
        for(var i = 0; i < this.cardArr.length; i++) {
            randIndex = Math.floor(Math.random() * this.cardArr.length);
            
            tempVal = this.cardArr[i];
            this.cardArr[i] = this.cardArr[randIndex];
            this.cardArr[randIndex] = tempVal;
        }
    }

    dealCard() {
        var popped = this.cardArr.pop();
        this.dealtCards.push(popped);
        return popped;
    }

    toString() {
        var output = "";
        for(var i = 0; i < this.cardArr.length; i++) {
            output += this.cardArr[i].toString() + "\n";
        }

        return output;
    }

}

class Card {
    suit = 0; //1 = Hearts, 2 = Diamonds, 3 = Clubs, 4 = Spades
    num = 1; //card number; Jack = 11, Queen = 12, King = 13, Ace = 14

    constructor(suit, num) {
        this.suit = suit;
        this.num = num;
    }

    toString() {
        var suitString = "";
        var numString = "";

        switch(this.suit) {
            case 1:
                suitString = "Hearts";
                break;
            case 2:
                suitString = "Diamonds";
                break;
            case 3:
                suitString = "Clubs";
                break;
            case 4:
                suitString = "Spades";
                break;
            default:
                suitString = "?";
        }

        switch(this.num) {
            case 11:
                numString = "Jack";
                break;
            case 12: 
                numString = "Queen";
                break;
            case 13: 
                numString = "King";
                break;
            case 14:
                numString = "Ace";
                break;
            default:
                numString = "" + this.num;
        
        }
        return numString + " of " + suitString;
        
    }

}

class Player {
    name = "";
    hand = [];

    constructor(name) {
        this.name = name;
    }

    addCard(card) {
        this.hand.push(card);
    }

    toString() {
        var output = "";
        for(var i = 0; i < this.hand.length; i++) {
            output += this.hand[i].toString() + ",\nyy";
        }

        return output;
    }
}


//Main Area
var deck = new Deck();
var players = [new Player("Bash"), new Player("Yusher")];

var i = 0;
while(deck.cardArr.length) {
    players[i%players.length].addCard(deck.dealCard());
    i++;
}

//console.log(players);
console.log(players[0].toString());