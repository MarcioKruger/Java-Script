const nomes=['marcio','strelau','kruger','ludy','ferreira','alves']
nomes.map((el,p)=>{
    console.log('Nome: ' + el + ' posição: ' + p)
})
//--------------------------------------------------
console.log()
//--------------------------------------------------
let c=nomes.map((el1,p1)=>{
    return el1
})
console.log(c)
//--------------------------------------------------
console.log()
//--------------------------------------------------
let c1=nomes.map((el1,p1)=>{
    return 'nome: ' + el1 + ' => posição: ' + p1
})
console.log(c1)

let el=document.getElementsByTagName("div")
el=[...el]
el.map((e,i)=>{
    console.log(e)
})
//--------------------------------------------------
let el1=document.getElementsByTagName("div")
el1=[...el1]
el1.map((e,i)=>{
    console.log(e.innerHTML)
})

const el2=document.getElementsByTagName("div")
const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)

const convertInt=(e)=>parseInt(e)
let num=['1','2','3','4','5'].map(convertInt)
console.log(num)

const convertInt1=(b)=>parseInt(b)
const dobrar=(b)=>b*2
let num1=['1','2','3','4','5'].map(dobrar)
console.log(num1)