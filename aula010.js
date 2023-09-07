let n=10
let res=n%2

if(res==0){
    console.log("Par")
}else{
    console.log("Impar")
}

//------------------------------------------------------------

let res1=(!(n%2) ? "par" : "Impar") 

console.log(res1)

//0 = false
// 1 = true
// é preciso negar a primeira expressão -> Teste lógico ? se verdadeiro : se falso

//------------------------------------------------------------

let num1 = 30
let num2 = 20
let res2 = (num1 > num2 ? "Verdadeiro" : "Falso")
console.log(res2)
//------------------------------------------------------------
let stat = "i"
let res3 = (stat == "a" ? "Ativo" : "Inativo")
console.log(res3)