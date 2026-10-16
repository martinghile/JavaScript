function carregar() {

    var agora = new Date()
    var hora = agora.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    msg.innerHTML = `Agora são ${hora} horas.`


    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        msg.innerHTML += ' Bom Dia!'
        document.body.style.background = 'lightblue'

    } else if (hora >= 13 && hora < 18) {
        msg.innerHTML += ' Boa Tarde!'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#ebaa41'

    } else {
        msg.innerHTML += ' Boa Noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#343434'

    }
}