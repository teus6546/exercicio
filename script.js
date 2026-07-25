function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert ('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                //kid
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade >= 11 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //kid
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade >= 11 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}