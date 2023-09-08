function* cores(){
    yield "Azul"
    yield "Verde"
    yield "amarelo"
}

let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

//-------------------------------
console.log()
//-------------------------------
function* perguntas(){
    const nome=yield 'Qual seu nome? '
    const esporte=yield 'Seu esporte favorito? '
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}
const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Márcio').value)
console.log(itp.next('Scum').value)

//-------------------------------
console.log()
//-------------------------------
function* contador(){
    let i=0
    while(true){
        yield i++
    }
}
const itcc=contador()
console.log(itcc.next().value)
console.log(itcc.next().value)
console.log(itcc.next().value)

//-------------------------------
console.log()
//-------------------------------
function* contador1(){
    let i=0
    while(true){
        yield i++
    }
}
const itccc=contador()
for(let i=0;i<10;i++){
    console.log(itccc.next().value)
}

//-------------------------------
console.log()
//-------------------------------
function* contador11(){
    let i=0
    while(true){
        yield i++
        if(i>5)
            break
    }
}
const itccc1=contador11()
for(let c of itccc1){
    console.log(c)
}