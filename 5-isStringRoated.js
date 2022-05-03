function isStringRoated(source, test) {
    return (source + source).includes(test) && source.length === test.length
}

console.log(isStringRoated('javascript', 'scriptjava')) // true
console.log(isStringRoated('javascript', 'ascriptjav')) // true