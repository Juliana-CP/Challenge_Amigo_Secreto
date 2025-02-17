//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [] ;
function adicionarAmigo() {
    let nome = document.querySelector("input").value ;
    console.log(nome) ;

    if(nome.trim() == "") {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nome) ;
        document.querySelector("input").value = "" ;
        console.log(amigos) ;

        atualizarListaDeAmigos() ;
        
    }
    
}

function atualizarListaDeAmigos() {
    const lista = document.getElementById("listaAmigos") ;
    lista.innerHTML = "" ;

    amigos.forEach(nome => {
        let li = document.createElement("li") ;
        li.textContent = nome ;
        lista.appendChild(li) ;
    }) ;

}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert( "A lista está vazia. Adicione nomes antes de sortear.") ;
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length) ;
    const nomeSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").textContent = `O amigo sorteado é: ${nomeSorteado}`;

    
}