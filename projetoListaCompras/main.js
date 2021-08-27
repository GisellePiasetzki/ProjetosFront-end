import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"

    const criarTarefa = (evento) => {
        evento.preventDefault() // para evitar o recarregamento da página

        const lista = document.querySelector('[data-list]') //pegando a ul
        const input = document.querySelector('[data-form-input]')
        //pegar valor do input
        const valor = input.value

        const tarefa = document.createElement('li')
        //para colocar o efeito css, devo acessar a classe
        tarefa.classList.add('task')

        //criando o modelo de paragrafo
        const conteudo = `<p class="content">${valor}</p>`
        //acessando o conteúdo de li e colocar dentro
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa) //o appendChild adiciona no final do nó

        input.value = " " //limpando o input
    }

    // peguei o elemento, usando o data como elemento específico para não causar problemas, mas poderia ter pego pela classe, ou id.
    const novaTarefa = document.querySelector('[data-form-button]');

    // inserir o evento
    novaTarefa.addEventListener('click', criarTarefa);

    //para criar a linha / criar componentedo botao que faz a ação
  

