let num = [2,6,8,1,3,7]
console.log(num)

for(let pos = 0; pos < num.length; pos++ ){
    console.log(`posição do vetor ${pos} está com o elemento ${num[pos]}`)
}

// simplificando o for

for (let pos in num){
    console.log(`posição ${pos} com o valor ${num[pos]}`)
}

// mostrando qual a posição do vetor se encontra o elemento desejado
console.log(num.indexOf(7))