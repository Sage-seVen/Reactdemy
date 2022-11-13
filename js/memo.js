const preValues = []
function square(n) {
    if (preValues[n] != null) {
        return preValues[n]
    }
    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }

    // Storing precomputing value
    preValues[n] = result;
    return result;
}

console.log(square(50000));
console.log(square(5000));
console.log(square(500));