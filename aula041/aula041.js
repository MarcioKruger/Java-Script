const caixa1=document.querySelector("#caixa1")
const cursos=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursoss=["HTML","JS - aulas","JavaScript - 2023","Kruger","Python","PHP","Ract Native"]

cursoss.map((el, chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.innerHTML=el
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class", "curso c1")

    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src","lixeira.png")
    btn_lixeira.setAttribute("class","lixeira")

    btn_lixeira.addEventListener("click", (evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})

