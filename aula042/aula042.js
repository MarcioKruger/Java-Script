const idades=[15,21,30,17,18,44,12,50]

const maior18=(valor)=>{
    if(valor>=18)
        return valor
}
const menor18=(valor)=>{
    if(valor<18)
        return valor
}
const maior=idades.filter(maior18)
const menor=idades.filter(menor18)
    
console.log(idades)
console.log(maior)
console.log(menor)
