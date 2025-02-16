//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listadenomes = [] ;
function adicionarAmigo() {
    let nome = document.querySelector("input").value ;
    console.log(nome) ;

    if(nome.trim() == "") {
        alert("por favor, insira um nome.")
    } else {
        listadenomes.push(nome) ;
        document.querySelector("input").value = "" ;
        console.log(listadenomes) ;

    }
    
}

