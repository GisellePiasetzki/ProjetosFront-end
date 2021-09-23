import { carregaTarefa } from "./carregaTarefa.js"
import BotaoConclui from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"


export const handleNovoItem = (evento) => {
    evento.preventDefault() // para evitar o recarregamento da página
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] //se não tiver nada, inicia como array vazio


    //const lista = document.querySelector('[data-list]') //pegando a ul
    const input = document.querySelector('[data-form-input]')
    //pegar valor do input
    const valor = input.value

    // Para colocar a data
    const calendario = document.querySelector('[data-form-date]'); //aqui seleciona toda a tag
    const data = moment(calendario.value) //aqui seleciona o que o usuário digitar. Usando biblioteca para formatar a data.
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY')

    const concluida = false



    const dados = {
        valor, 
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas= [...tarefas, dados]

    //const criaTarefa = Tarefa(dados)


    //sessionStorage.setItem("tarefas", JSON.stringify(dados)) // armazena enquanto a sessão está aberta
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)); //chave/valor em string
    //lista.appendChild(criaTarefa) //o appendChild adiciona no final do nó

    input.value = " " //limpando o input
    carregaTarefa();
}

//T maiusculo para indicar que é um componente
export const Tarefa = ({valor, horario, concluida}, id) => {
    const tarefa = document.createElement('li')
    //para colocar o efeito css, devo acessar a classe
    //criando o modelo de paragrafo
    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if(concluida){
        tarefa.classList.add('done')
    } 
        tarefa.classList.add('task')

    //acessando o conteúdo de li e colocar dentro
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa
}
