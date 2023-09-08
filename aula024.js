const f=function(v1,v2){
    return v1+v2
}
console.log(f(5,99))
//-----------------------------
console.log("----------------------")
//-----------------------------
const r=function(...v){
    let res=0
    for(let i of v){
        res+=i
    }
    return res
}
console.log(r(41,55,55))
//-----------------------------
console.log("----------------------")
//-----------------------------
const b=new Function("n1","n2","return n1+n2") // Função construtora anônima
console.log(b(2,2))