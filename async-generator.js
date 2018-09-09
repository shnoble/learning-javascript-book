const fs = require('fs');

function nfcall(f, ...args) {
    console.log("nfcall call");
    return new Promise(function(resolve, reject) {
        f.call(null, ...args, function(err, ...args) {
            if(err) return reject(err);
            resolve(args.length<2 ? args[0] : args);
        });
    })
}

function ptimeout(delay) {
    console.log("ptimeout call");
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

function grun(g) {
    console.log("grun call");
    const it = g();
    (function iterate(val) {
        const x = it.next(val);
        console.log("grun next");
        console.log(`grun ${x.done}`);
        if(!x.done) {
            if(x.value instanceof Promise) {
                console.log(`grun promise`);
                x.value.then(iterate).catch(err => it.throw(err));
            } else {
                console.log(`grun timeout`);
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}

function* theFutureIsNow() {
    console.log("theFutureIsNow call");
    const dataA = yield nfcall(fs.readFile, 'a.txt');
    const dataB = yield nfcall(fs.readFile, 'b.txt');
    const dataC = yield nfcall(fs.readFile, 'c.txt');
    yield ptimeout(60*1000);
    yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
}

grun(theFutureIsNow);

