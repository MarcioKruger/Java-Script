const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(let i of val)
            res+=i
        return res
    }
    return somar(valores)
}
console.log(soma(10,5,80))
//-----------------------------
console.log("----------------------")
//-----------------------------

const somar1=val=>{
    let res=0
    for(let i of val)
        res+=i
    return res
}
const soma1=(...valores)=>{
   return somar1(valores)
}
console.log(soma1(10,5,80))