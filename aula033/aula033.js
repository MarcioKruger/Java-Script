const divTodas = [...document.get("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementsByClassName("curso")[6]

console.log(cursosTodos)
console.log(cursosc1)
console.log(cursosc2)
console.log(cursoEspecial)

cursosc2.map((e)=>{
    e.classList.add("destaque")
})