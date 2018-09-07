// 카드 덱을 만듭니다.
const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
    for(let value=1; value<=13; value++)
        cards.push({suit, value});

console.log(cards);

// values 가 2인 카드
const result1 = cards.filter(c => c.value === 2);
console.log(result1);


// 다이아몬드
const result2 = cards.filter(c => c.suit === 'D');
console.log(result2);

// 킹, 퀸, 주니어
const result3 = cards.filter(c => c.value > 10);
console.log(result3);

// 하트의 킹, 퀸, 주니어
const result4 = cards.filter(c => c.value > 10 && c.suit === 'H');
console.log(result4);
