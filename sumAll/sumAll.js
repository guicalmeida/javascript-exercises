const sumAll = function(...numbers) {
numbers.sort();
let smaller = numbers[0];
let bigger = numbers[1];
if (typeof (smaller) !== "number" || typeof (bigger) !== "number" || smaller < 0 || bigger < 0) {
    return "ERROR";
} else {
    for (i = smaller + 1; i <= bigger; i++) {
        smaller += i;
    }
    return smaller;
}
}

module.exports = sumAll
