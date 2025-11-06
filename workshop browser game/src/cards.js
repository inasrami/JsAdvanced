/** @type {Record<'Clubs' | 'Diamonds' | 'Hearts' | 'Spades', CardSuit>} */
export const suits = {
    Clubs: 'clubs',
    Diamonds: 'diamonds',
    Hearts: 'hearts',
    Spades: 'spades'
};

/**
 * @typedef {'clubs'|'diamonds'|'hearts'|'spades'} CardSuit
 */

export const faces = {
    Ace: 1,
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
};

/**
 * @typedef {number} CardFace
 */

export const colors = {
    clubs: 'black',
    diamonds: 'red',
    hearts: 'red',
    spades: 'black',
};

export class Card {
    /** @type {CardSuit} */
    suit = null;
    /** @type {CardFace} */
    face = null;
    /** @type {boolean} */
    faceUp = false;

    /**
     * @param {Card['suit']} suit 
     * @param {Card['face']} face 
     * @param {boolean?} faceUp 
     */
    constructor(suit, face, faceUp = false) {
        this.suit = suit;
        this.face = face;
        this.faceUp = faceUp;
    }
}

export class Deck {
    /** @type {Card[]} */
    cards = [];

    get size() {
        return this.cards.length;
    }

    get topIndex() {
        return this.size - 1;
    }

    get top() {
        return this.cards[this.topIndex];
    }

    /**
     * @param {Deck['cards']?} cards
     */
    constructor(cards = []) {
        this.cards = cards;
    }

    /**
     * @param {Card[]?} cards 
     */
    getAction(cards) {
        if (cards && cards.length) {
            if (this.canPlace(cards)) {
                return 'place';
            }
        } else {
            if (this.canFlip()) {
                return 'flip';
            } else if (this.cards.some((_, i) => this.canTake(i))) {
                return 'take';
            }
        }

        return null;
    }

    canFlip() {
        return this.size && this.top.faceUp == false;
    }

    /**
     * @abstract
     * @param {number} index 
     * @returns {boolean}
     */
    canTake(index) {
        throw new TypeError('Cannot invoke abstract method');
    }

    /**
     * @abstract
     * @param {Card[]} cards 
     * @returns {boolean}
     */
    canPlace(cards) {
        throw new TypeError('Cannot invoke abstract method');
    }

    flip() {
        if (!this.canFlip()) {
            return;
        }

        this.top.faceUp = true;
    }

    /**
     * @param {number} index 
     */
    take(index) {
        if (!this.canTake(index)) {
            return;
        }

        return this.cards.splice(index, this.size - index);
    }

    /**
     * @param {Card[]} cards 
     */
    place(cards) {
        if (!this.canPlace(cards)) {
            return;
        }

        this.cards.push(...cards);
    }
}

export class Stock extends Deck {
    canFlip() {
        return true;
    }

    canTake() {
        return false;
    }

    canPlace() {
        return false;
    }
}

export class Waste extends Deck {
    canTake(index) {
        return this.size && index == this.topIndex;
    }

    canPlace() {
        return false;
    }
}

export class Foundation extends Deck {
    /** @type {CardSuit} */
    suit = null;

    /**
     * @param {Deck['cards']} cards 
     * @param {Foundation['suit']} suit 
     */
    constructor(cards, suit) {
        super(cards);
        this.suit = suit;
    }

    canTake(index) {
        return this.size && index == this.topIndex;
    }

    /**
     * @param {Card[]} cards
     */
    canPlace(cards) {
        if (cards.length != 1) {
            return false;
        }

        const card = cards[0];

        return (card.suit == this.suit) &&
            ((card.face == faces.Ace && this.size == 0) ||
                (this.size && card.face - 1 == this.top.face));
    }
}

export class Pile extends Deck {
    /**
     * @param {number} index 
     */
    canTake(index) {
        return this.cards[index].faceUp;
    }

    /**
     * @param {Card[]} cards
     */
    canPlace(cards) {
        const bottomCard = cards[0];

        return (this.size == 0 && bottomCard.face == faces.King) ||
            (this.size && this.top.faceUp && bottomCard.face + 1 == this.top.face &&
                colors[bottomCard.suit] != colors[this.top.suit]);
    }
}