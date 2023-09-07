/*

operadores Bewise

& -> retorna com equivalente de bit 1 e 1. Ex. 1 e 1 = 1, 0 e 1 = 0 (equivale ao &&, mas em binário)
| -> retorna sem equivalencia de bit. Ex. 1 e 1 = 1, 1 e 0 = 1 (equivale ao ||, mas em binário)
^ -> retorna 1 onde não tiver equivalencia de 1.
<< -> retorna o deslocamente para a esquerda conforme o número indicado.
>> -> retorna o deslocamento para a direita conforme o número incicado.

*/


let n1=10
let n2=11
let res=0
let res1=0
let res2=0
let res3=0
let res4=0

res = n1 & n2
res1 = n1 | n2
res2 = n1 ^ n2
res3 = n1 << 1 // como se estivesse dobrando o valor de n1
res4 = n1 >> 1 // como se estivese tirando a metade de n1 

console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)