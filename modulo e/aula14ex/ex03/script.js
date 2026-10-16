const { createElement } = require("react")

function calcular() {
    var inicio = document.querySelector('input#txtnb1')
    var fim = document.querySelector('input#txtnb2')
    var passo = document.querySelector('input#txtnb3')
    res = document.querySelector('div#res')
    res.innerHTML = `Contando: <br>`
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'hand.png')
    img.style.width ='20px'
    img.style.verticalAlign ='middle'

    if (inicio.value == '' || fim.value == '' || Number(fim.value < 1) || passo.value == ''){
        window.alert('Você não digitou corretamente, tente novamente!')
    }else{
    for (var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        res.innerHTML += `${i} `
        res.appendChild(img)
        res.innerHTML += ` `
    }}
}

