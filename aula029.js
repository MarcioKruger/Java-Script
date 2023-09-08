 function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    console.log('nome: ' + nome + ' obteve a nota: '  + nota)
 }
 aluno('Márcio', 98)

function aluno2(nome2,nota2){
    this.nome1=nome2
    this.nota2=nota2

    this.dados_arrow=function(){
    setTimeout(()=>{
        console.log(this.nome2)
        console.log(this.nota2)
    },2000)
 }
    
}
const al2=new aluno2('Kruger', 11)

