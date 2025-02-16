function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')

    //pegando a hora atual
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19

    if (hora >= 0 && hora < 12){
        msg.innerText = `Bom dia! Agora são ${hora} horas`
        document.body.style.backgroundColor = '#e2cd9f'
        imagem.src = 'fotomanha.png'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerText = `Boa tarde! Agora são ${hora} horas`
        document.body.style.backgroundColor = '#b9846f'
        imagem.src = 'fototarde.png'
    } else {
        msg.innerText = `Ba noite! Agora são ${hora} horas`
        document.body.style.backgroundColor = '#515154'
        imagem.src = 'fotonoite.png'
    }
}