let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isnumero (n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista(n, ele) {
    if (ele.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            media += (valores[pos]) / valores.length
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }    
        res.innerHTML = ''
        res.innerHTML += `<p>Total de numeros cadastrados: ${total}</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor é: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }
}
