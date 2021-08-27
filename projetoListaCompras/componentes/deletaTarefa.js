 
    //para o botão de deletar tarefa - componente começa com letra maiúscula
    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button')
        botaoDeleta.innerText = 'deletar'
        botaoDeleta.style.color = "#B36A5E"

        botaoDeleta.addEventListener('click', deletarTarefa)
        return botaoDeleta
    }

    const deletarTarefa = (evento) => {
        const botaoDeleta = evento.target
        const tarefaCompleta = botaoDeleta.parentElement

        tarefaCompleta.remove()

        return botaoDeleta
    }
    export default BotaoDeleta