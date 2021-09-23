import { handleNovoItem } from "./componentes/criaTarefa.js";
import { carregaTarefa } from "./componentes/carregaTarefa.js";

// peguei o elemento, usando o data como elemento específico para não causar problemas, mas poderia ter pego pela classe, ou id.
const novaTarefa = document.querySelector('[data-form-button]');

// inserir o evento
novaTarefa.addEventListener('click', handleNovoItem);

    //para criar a linha / criar componentedo botao que faz a ação
carregaTarefa();

