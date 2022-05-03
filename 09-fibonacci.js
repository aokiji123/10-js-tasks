function fibonacci(number) {
    const sequence = [1, 1]
    
    if (number < 2) {
        return (sequence.slice(0, number)).toString()
    }
    
    while (sequence.length < number) {
        const last = sequence[sequence.length - 1]
        const prev = sequence[sequence.length - 2]
        sequence.push(last + prev)
    }

    return sequence.join(', ')
}

console.log(fibonacci(5)) // 1, 1, 2, 3, 5
console.log(fibonacci(8)) // 1, 1, 2, 3, 5, 8, 13, 21