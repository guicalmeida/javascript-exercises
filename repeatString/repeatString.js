const repeatString = function(string, times) {
    if (times < 0) {
        return "ERROR"
} else {return string.repeat(times);
}
}

module.exports = repeatString
