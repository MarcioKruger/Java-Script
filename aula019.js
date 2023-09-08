let n=0
let max=1000
while(n<max){
    console.log("js - " + n)
    if(n>10){
        break
    }
    n++
}
console.log("fim")

//-------------------------------------
console.log()
//-------------------------------------
let pares=0
for(let i=0;i<max;i++){
    console.log("JJJSSS - " + i)
    if(i%2==0){
        pares++
    }
}
console.log("fim do programa")
console.log("numeros pares: " + pares)
//------------------------------------
console.log()
//------------------------------------
let pares1=0
for(let i=0;i<max;i++){
    if(i%2!=0){
        continue
    }
    pares1++
}
console.log("Quantidade de pares: " + pares1)