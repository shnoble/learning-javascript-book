function* rainbow() {
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const it = rainbow();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

const it1 = interrogate();
console.log(it1.next());
console.log(it1.next('Ethan'));
console.log(it1.next('orange'));

