function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        // criando um elemento do tipo (img) na página HTML
        var img = document.createElement('img')
        // inseriondo (id) ao elemento com o valor (foto)
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'joven-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'joven-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta-f.png')
            } else {
                img.setAttribute('src', 'idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        // adicionando um elemento do tipo img
        res.appendChild(img)
    } 
}