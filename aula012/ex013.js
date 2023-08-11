var agora = new Date()
var diasem = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
switch(diasem){
    case 0:
        console.log(`Domingo, ${hora}:${min} hs.`)
        break
    case 1:
        console.log(`Segunda-feira, ${hora}:${min} hs.`)
        break
    case 2:
        console.log(`Terça-feira, ${hora}:${min} hs.`)
        break
    case 3:
        console.log(`Quarta-feira, ${hora}:${min} hs.`)
        break
    case 4:
        console.log(`Quinta-feira, ${hora}:${min} hs.`)
            break
    case 5:
        console.log(`Sexta-feira, ${hora}:${min} hs.`)
        break
    case 6:
        console.log(`Sábado, ${hora}:${min} hs.`)
        break
}
