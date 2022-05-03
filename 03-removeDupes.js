function removeDupes(string) {
    return Array.from(new Set(string)).join('')
}

console.log(removeDupes('foooooo')); // fo
console.log(removeDupes('fooooooffgde')); // fogde