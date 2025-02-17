function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        
        // variável contadora
        let c = 1
        
        // limpando o campo select antes de executar a função
        tab.innerHTML = ''
        
        while(c <= 10) {
            // associando opções a variável item
            let item = document.createElement('option')
            
            // formatando a opção como irá aparecer no select
            item.text = `${n} x ${c} = ${n*c}`
            
            // adicionando um valor ao value para saber qual foi o valor selecionado
            // caso queira fazer algo com esse resultado(opcional)
            item.value = `tab${c}`
            
            // adicionando ao select a opção formatada
            tab.appendChild(item)
            
            c++
        }
    }
}