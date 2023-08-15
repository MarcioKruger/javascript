let num = [1, 2, 3, 4, 5, 6]

num.sort()
console.log(`${num}`)

// estrura de repetição normal
for (let pos = 0;  pos < num.length; pos++){
    console.log(num[pos])
}
//estrutura de repetição melhorada

for(let pos in num){
    console.log(num[pos])
}

// comando que procura o indice do valor

console.log(num.indexOf(4))
