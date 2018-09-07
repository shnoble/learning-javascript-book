const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject) {
            for(let i=countdown.seconds; i>=0; i--) {
                timeoutIds.push(setTimeout(() => {
                    if(countdown.superstitious && i===13)  {
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("Oh my god"));
                    }
                    
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        })
    }
}

const c = new Countdown(5, true);
c.on('tick', function(i) {
    if(i>0) console.log(i + '...');
});
c.go()
    .then(function() {
        console.log('GO!');
    })
    .catch(function(err) {
        console.error(err.message);
    })

// 프라미스 체인
function launch() {
    return new Promise((resolve, reject) => {
        if(Math.random() < 0.5) return; // 문제가...
        console.log("Lift off!");
        setTimeout(() => resolve("In orbit!"), 2*1000);
    });
}

const c1 = new Countdown(13, true).on('tick', i => console.log(i + '...'));
c1.go().then(launch).then((msg) => console.log(msg)).catch((err) => console.error("Houston, we have a problem..."));

function addTimeout(fn, timeout) {
    if(timeout === undefined) timeout = 1000;
    return function(...args) {
        return new Promise((resolve, reject) => {
            const tid = setTimeout(reject, timeout, new Error("promise timed out"));
            fn(...args)
                .then((...args) => {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch((...args) => {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    }
}

const c2 = new Countdown(5);
c2.go()
    .then(addTimeout(launch, 11*1000))
    .then((msg) => console.log(msg))
    .catch((err) => console.error("Houston, we have a problem: " + err.message));

