function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        
        if (!validFaces.includes(face)) {
            throw new Error('Invalid card face: ' + face);
        }
        
        if (!validSuits.hasOwnProperty(suit)) {
            throw new Error('Invalid card suit: ' + suit);
        }
        
        return {
            face: face,
            suit: suit,
            toString: function() {
                return this.face + validSuits[this.suit];
            }
        };
    }
    
    let result = [];
    
    for (let cardStr of cards) {
        let face = cardStr.slice(0, -1);
        let suit = cardStr.slice(-1);
        
        try {
            let card = createCard(face, suit);
            result.push(card.toString());
        } catch (error) {
            console.log(`Invalid card: ${cardStr}`);
            return;
        }
    }
    
    console.log(result.join(' '));
}