const caixa1=document.querySelector("#caixa1")
const btn_c1=document.querySelector("#c1")
const cursos=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")

console.log(c1_2.innerHTML)
console.log(c1_2.parentElement)
console.log(c1_2.parentElement.parentNode)
console.log(c1_2.parentNode.parentNode.children[4])

    // console.log(caixa1.hasChildNodes())
    // console.log(cursos[0].hasChildNodes())
    // console.log(cursos[0].childNodes)
    
    // if(cursos[0].children.length > 0){
    //   console.log("Possui filhos")
    // }else{
    //   console.log("Não posui filhos")
    // }

    // console.log(caixa1.children.length > 0 ? "Posui filhos" : "Não possui filhos")

    // console.log(caixa1.lastElementChild.innerHTML="TESTEE")

    // console.log(caixa1.children[1].innerHTML="teste")

    // console.log(caixa1.firstElementChild.innerHTML="TESTEE")

