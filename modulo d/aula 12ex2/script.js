function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifuque os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21){
                //jovem
                 img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
            

        } else if (fsex[1].checked){
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-menina.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}