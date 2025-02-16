var agora = new Date().getHours()

console.log(`Agora são exatamente ${agora} horas.`)

if (agora < 12) {
    console.log('Bom dDia!')
} else if (agora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
