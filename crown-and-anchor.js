$(document).ready(function() {
    'user strict';

    let funds = 50; // 시작 조건
    let round = 0;

    console.log("funds: " + funds);

    while(funds > 1 && funds < 100) {
        round++;
        console.log(`round ${round}`);
        console.log(`\tstarting funds: ${funds}p`);

        // 돈을 겁니다.
        const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};

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
        funds = funds - totalBet;
        console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + ` (total: ${totalBet} penced)`);

        // 주사위를 굴립니다.
        const hand = [];
        for(let roll = 0; roll < 3; roll++) {
            hand.push(randFace());
        }
        console.log(`\thand: ${hand.join(', ')}`);

        // 그림을 맞추면 돈을 가져옵니다.
        let winnings = 0;
        for(let die = 0; die < hand.length; die++) {
            let face = hand[die];
            if(bets[face] > 0) winnings = winnings + bets[face];
        }
        funds = funds + winnings;
        console.log(`\twinnings: ${winnings}`);
    }   
    console.log(`\tending funds: ${funds}`);

    function rand(m, n) {
        return m + Math.floor((n - m + 1) * Math.random());
    }
    
    function randFace() {
        return ["crown", "anchor", "heart", "spade", "club", "diamond"]
            [rand(0, 5)];
    }    
});
