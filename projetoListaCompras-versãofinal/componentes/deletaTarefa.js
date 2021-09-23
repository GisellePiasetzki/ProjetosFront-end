const deletarTarefa = (atualiza, id) => {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(index, 1) //a partir do index, remove ele mesmo.
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
}


//para o botão de deletar tarefa - componente começa com letra maiúscula
const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.style.color = "#B36A5E"

    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))
    return botaoDeleta
}

export default BotaoDeleta