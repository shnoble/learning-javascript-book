// 카드 덱을 만듭니다.
const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
    for(let value=1; value<=13; value++)
        cards.push({suit, value});

function cardToString(c) {
    const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };

    for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}

// value가 2인 카드
const result1 = cards.filter(c => c.value === 2).map(cardToString);
console.log(result1);

// 하트의 킹, 퀸, 주니어
const result2 = cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString);
console.log(result2);

