$(document).ready(function() {
    'user strict';

    let funds = 50;
    while(funds > 1 && funds < 100) {
        // 돈을 겁니다.
        const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
        console.log("funds: " + funds);

        let totalBet = rand(1, funds);
        console.log("totalBet: " + totalBet);

        if(totalBet === 7) {
            totalBet = funds;
            bets.heart = totalBet;
        } else {
            // 그 판에 걸 돈을 분배합니다.
            let remaining = totalBet;
            do {
                let bet = rand(1, remaining);
                let face = randFace();
                bets[face] = bets[face] + bet;
                remaining = remaining - bet;
            } while (remaining > 0);
        }

        // 주사위를 굴립니다.
        const hand = [];
        for(let roll = 0; roll < 3; roll++) {
            hand.push(randFace());
        }

        // 그림을 맞추면 돈을 가져옵니다.
        funds = funds - totalBet;
    }   

    function rand(m, n) {
        return m + Math.floor((n - m + 1) * Math.random());
    }
    
    function randFace() {
        return ["crown", "anchor", "heart", "spade", "club", "diamond"]
            [rand(0, 5)];
    }    
});
