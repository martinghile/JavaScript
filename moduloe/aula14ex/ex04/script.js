function calcular() {
    var numero = document.querySelector('#txtnb').value
    p = document.querySelector('#teste')
    res = document.querySelector('#res')
    

    if (numero == '') {
        window.alert('Você não digitou um número válido, tente denovo!')

    } else {
        res.innerHTML = ''
        for (var i = 0; i <= 10; i++) {
            
            var item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            res.appendChild(item)
        }
    }



}