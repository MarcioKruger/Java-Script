//const c1=document.querySelector('#c1')
const cursos=[...document.querySelectorAll(".curso")]
const msg=()=>{
     alert('clicouuuuu')
}

// c1.addEventListener("click", ()=>{
//          alert('clicouuuuu')
//      })

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})

// c1.addEventListener("click", (evt)=>{
//             const el = evt.target
//             el.classList.add("destaque")
//      })