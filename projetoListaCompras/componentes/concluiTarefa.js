const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = "concluir"

    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
    //retorna
}
//atrvés da variavel botaoConclui capturamos qual elemento foi clicado, depois utilizamos a propriedade parentElement para subir um nó na árvores, por fim, colocamos o método toggle que vai adicionar a classe done quando clicarmos no botão
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}
export default BotaoConclui