// recursividade
function fatorial (n) {
    if (n ==1) {
        return 1
    } else {
        return n * fatorial(n -1)
    }
}

res = fatorial(5)
console.log(res
    )