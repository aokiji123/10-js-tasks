function search(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return false
}

console.log(search([1, 7, 5, 6, 9], 6)) // 3
console.log(search([1, 3, 5, 6, 9], 4)) // false