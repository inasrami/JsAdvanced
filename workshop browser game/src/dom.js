import { colors, Foundation, Pile, Stock, Waste } from './cards.js';

const suits = {
    clubs: '&clubs;',
    diamonds: '&diams;',
    hearts: '&hearts;',
    spades: '&spades;'
};

const faces = {
    1: 'A',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'J',
    12: 'Q',
    13: 'K',
};

/**
 * @param {import('./cards.js').Deck} deck 
 * @param {number} [index]
 * @param {import('./cards.js').Card[]?} [cards]
 */
export function createDeckElement(deck, index, cards) {
    const element = document.createElement('article');
    element.classList.add('deck');

    if (deck.size == 0 && deck.getAction(cards)) {
        element.classList.add('active');
    }

    if (deck instanceof Stock) {
        element.dataset.type = 'stock';
    } else if (deck instanceof Waste) {
        element.dataset.type = 'waste';
    } else if (deck instanceof Foundation) {
        element.dataset.suit = deck.suit;
        element.dataset.type = 'foundations';
    } else if (deck instanceof Pile) {
        element.dataset.index = String(index);
        element.dataset.type = 'piles';
    }

    for (let i = 0; i < deck.size; i++) {
        const card = deck.cards[i];
        const isTop = i == deck.topIndex;
        const active = isActive(deck, isTop, i, cards);
        element.appendChild(createCardElement(card, isTop, i, active));
    }

    return element;
}

/**
 * 
 * @param {import('./cards.js').Card} card 
 * @param {boolean} isTop 
 * @param {number} index 
 */
export function createCardElement(card, isTop, index, active) {
    const element = document.createElement('div');
    element.dataset.index = String(index);
    element.classList.add('card');
    if (active) {
        element.classList.add('active');
    }

    if (isTop) {
        element.classList.add('top');
    }

    if (card.faceUp) {
        element.innerHTML = `${suits[card.suit]}${faces[card.face]}`;
        element.classList.add(colors[card.suit]);
    } else {
        element.innerHTML = `<span class="back${isTop ? ' top' : ''}"></span>`;
    }

    return element;
}

/**
 * 
 * @param {import('./cards.js').Deck} deck 
 * @param {boolean} isTop 
 * @param {number} i 
 * @param {import('./cards.js').Card[]?} cards 
 */
function isActive(deck, isTop, i, cards) {
    if (cards && cards.length) {
        return (isTop && deck.canPlace(cards));
    } else {
        return (isTop && deck.canFlip()) || deck.canTake(i);
    }
}