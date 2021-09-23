//atrvés da variavel botaoConclui capturamos qual elemento foi clicado, depois utilizamos a propriedade parentElement para subir um nó na árvores, por fim, colocamos o método toggle que vai adicionar a classe done quando clicarmos no botão
const concluirTarefa = (atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

    atualiza()
}


const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = "concluir"

    botaoConclui.addEventListener('click',() =>  concluirTarefa(atualiza, id))
    return botaoConclui
    //retorna
}

export default BotaoConclui