let num=[10,20,30,40,50]

for(let i=0;i<num.length;i++){
    console.log(i)
}

//-----------------------------------------
console.log()

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

console.log()

for(n in num){
    console.log(n)
}

console.log()

for(n in num){
    console.log(num[n])
}

//------------------------------------------
console.log()

let info=["marcio", "strelau", "kruger"]

for (n in info){
    console.log(info[n])
}
console.log()

for(n of info){
    console.log(n)
}

//-------------------------------------------

let abjs=document.getElementsByTagName("div")
for(o of abjs){
    console.log(o)
}
for(o in abjs){
    console.log(o)
}