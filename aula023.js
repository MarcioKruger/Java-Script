function soma(n1=0,n2=0){
    return n1+n2
}
console.log(soma(10,8))
//----------------------------
//-----------------------------
console.log("----------------------")
//-----------------------------
function somarest(...v){
    let tam=v.length
    let res=0
    for(let i=0;i<tam;i++)
        res+=v[i]
    return res
}
console.log(somarest(1,2,3,4,5,6,7,8,9))
//-----------------------------
console.log("----------------------")
//-----------------------------
function s(...v){
    let res=0
    for(let i of v){
        res+=i
    }
    return res
}
console.log(s(1,5,6,3,4,7,8,9,5,22,3, 2000))