//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [] ;
function adicionarAmigo() {
    let nome = document.querySelector("input").value ;
    console.log(nome) ;

    if(nome.trim() == "") {
        alert("Por favor, insira um nome.")
    } else {
        listaDeNomes.push(nome) ;
        document.querySelector("input").value = "" ;
        console.log(listaDeNomes) ;

        atualizarListaDeAmigos() ;

    }
    
}

function atualizarListaDeAmigos() {
    const lista = document.getElementById("listaAmigos") ;
    lista.innerHTML = "" ;

    listaDeNomes.forEach(nome => {
        let li = document.createElement("li") ;
        li.textContent = nome ;
        lista.appendChild(li) ;
    }) ;

}