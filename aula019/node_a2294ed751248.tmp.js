f = function fatorial (n) {
    let fat = 1
    for (let c = n; n > 1; c--) {
        fat *= c
    }
    return fat
}
 console.log(f(5))