function mudarTexto(){
    let n1=2
    let n2=5.5
    let res=n1*n2
    if(res%2==0){
        return "Par"
    }else{
        return "Impar"
    }
}

let numero=mudarTexto()
console.log(numero)