import { Card, Deck, faces, Foundation, Pile, Stock, suits, Waste } from './cards.js';

export function createMainDeck() {
    const deck = new Deck();

    for (let suit of Object.values(suits)) {
        for (let face of Object.values(faces)) {
            deck.cards.push(new Card(suit, face));
        }
    }

    return deck;
}

/**
 * @param {Deck} deck 
 */
export function shuffleDeck(deck) {
    const stock = [];

    while (deck.size > 0) {
        const card = deck.cards.splice(Math.random() * deck.size | 0, 1)[0];
        stock.push(card);
    }

    deck.cards.push(...stock);
}

/**
 * @param {Deck} deck 
 * @returns {[Deck[], GameState]}
 */
export function dealDeck(deck) {
    /** @type {[Stock, Waste, Foundation, Foundation, Foundation, Foundation, Pile, Pile, Pile, Pile, Pile, Pile, Pile]} */
    const index = [
        new Stock(),
        new Waste(),
        new Foundation([], suits.Clubs),
        new Foundation([], suits.Diamonds),
        new Foundation([], suits.Hearts),
        new Foundation([], suits.Spades),
        new Pile(),
        new Pile(),
        new Pile(),
        new Pile(),
        new Pile(),
        new Pile(),
        new Pile(),
    ];

    /** @type {GameState} */
    const state = {
        stock: index[0],
        waste: index[1],
        foundations: /** @type {GameState['foundations']} */ ({
            [suits.Clubs]: index[2],
            [suits.Diamonds]: index[3],
            [suits.Hearts]: index[4],
            [suits.Spades]: index[5],
        }),
        piles: [
            index[6],
            index[7],
            index[8],
            index[9],
            index[10],
            index[11],
            index[12],
        ]
    };

    for (let i = 0; i < 7; i++) {
        const pile = state.piles[i];

        for (let j = 0; j <= i; j++) {
            pile.cards.push(deck.cards.pop());
        }

        pile.top.faceUp = true;
    }

    // Debug victory
    /*
    let count = 0;
    for (let suit of Object.values(suits)) {
        for (let face of Object.values(faces)) {
            count++;
            if (count == 52) {
                break;
            }

            state.foundations[suit].cards.push(deck.cards.shift());
            state.foundations[suit].top.faceUp = true;
        }
    }
    */

    state.stock.cards.push(...deck.cards);

    return [ index, state ];
}

/**
 * @param {GameState} state 
 * @param {string} type 
 * @param {number | string} id 
 * @returns {Deck}
 */
export function findDeck(state, type, id) {
    const result = state[type];

    if (result instanceof Deck) {
        return result;
    } else {
        return result[id];
    }
}

/**
 * @typedef {Object} GameState
 * @property {Stock} stock
 * @property {Waste} waste
 * @property {Record<import('./cards.js').CardSuit, Foundation>} foundations
 * @property {[ Pile, Pile, Pile, Pile, Pile, Pile, Pile]} piles
 */