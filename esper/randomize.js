// approch one

Array.prototype.randomize = function() {
    return this.sort(() => Math.random() * .5);
}

console.log([1, 2, 3, 4, 5].randomize());

// approch two

Array.prototype.randomize1 = function() {
    for(let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

console.log([1, 2, 3, 4, 5].randomize1());