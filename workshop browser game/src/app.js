import { createDeckElement } from './dom.js';
import { createMainDeck, dealDeck, findDeck, shuffleDeck } from './utils.js';

const zones = {
    stock: document.getElementById('stock'),
    foundations: document.getElementById('foundation'),
    piles: document.getElementById('pile'),
};
/** @type {{deckIndex: ReturnType<dealDeck>[0], state: ReturnType<dealDeck>[1], selected: import('./cards.js').Deck, cardIndex: number}} */
const gameState = {
    deckIndex: null,
    state: null,
    selected: null,
    cardIndex: null
};

document.getElementById('board').addEventListener('click', onClick);
document.getElementById('new-game').addEventListener('click', start);

start();

function start() {
    const mainDeck = createMainDeck();

    for (let n = 0; n < 6; n++) {
        shuffleDeck(mainDeck);
    }

    const [deckIndex, state] = dealDeck(mainDeck);
    gameState.deckIndex = deckIndex;
    gameState.state = state;
    gameState.selected = null;
    gameState.cardIndex = null;

    stateToBoard(state);
}

/**
 * @param {import('./utils.js').GameState} state 
 */
function stateToBoard(state) {
    const cards = gameState.selected && gameState.selected.cards.slice(gameState.cardIndex);
    const mapToElement = (deck, index) => createDeckElement(deck, index, cards);

    zones.stock.replaceChildren(
        mapToElement(state.stock),
        mapToElement(state.waste),
    );
    zones.foundations.replaceChildren(...Object.values(state.foundations).map(mapToElement));
    zones.piles.replaceChildren(...state.piles.map(mapToElement));

    if (Object.values(gameState.state.foundations).every(d => d.size == 13)) {
        setTimeout(() => alert('You Win!'), 0);
    }
}

function onClick(event) {
    let deckElement = null;
    let cardElement = null;

    if (event.target.classList.contains('deck')) {
        deckElement = event.target;
    } else if (event.target.classList.contains('card')) {
        cardElement = event.target;
        deckElement = cardElement.parentElement;
    } else if (event.target.classList.contains('back')) {
        cardElement = event.target.parentElement;
        deckElement = cardElement.parentElement;
    }

    if (!deckElement) {
        return;
    }

    const type = deckElement.dataset.type;
    const deck = findDeck(gameState.state, type, deckElement.dataset.suit || deckElement.dataset.index);
    const action = deck.getAction(gameState.selected && gameState.selected.cards.slice(gameState.cardIndex));

    if (action) {
        ({
            flip() {
                if (type == 'stock') {
                    flipStock();
                } else if (type == 'piles') {
                    const pileIndex = Number(deckElement.dataset.index);
                    flipPile(pileIndex);
                }
                gameState.selected = null;
                gameState.cardIndex = null;
            },
            take() {
                gameState.selected = deck;
                gameState.cardIndex = Number(cardElement.dataset.index);
            },
            place() {
                const cards = gameState.selected.take(gameState.cardIndex);
                deck.place(cards);
                gameState.selected = null;
                gameState.cardIndex = null;
            }
        })[action]();
    } else {
        gameState.selected = null;
        gameState.cardIndex = null;
    }

    stateToBoard(gameState.state);
}



function flipStock() {
    if (gameState.state.stock.size) {
        const card = gameState.state.stock.cards.pop();
        card.faceUp = true;
        gameState.state.waste.cards.push(card);
    } else {
        const cards = gameState.state.waste.cards.splice(0);
        cards.reverse();
        cards.forEach(c => c.faceUp = false);
        gameState.state.stock.cards.push(...cards);
    }
}

/**
 * @param {number} index 
 */
function flipPile(index) {
    gameState.state.piles[index].flip();
}