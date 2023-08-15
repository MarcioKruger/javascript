v = function fatorial (n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
res = v(5)
 console.log(res)
