function isUnique(string) {
    return new Set(string).size === string.length
}

console.log(isUnique('abcdef')) // true
console.log(isUnique('abcdefe')) // true