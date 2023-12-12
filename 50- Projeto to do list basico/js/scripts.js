//AÇÃO 2: CRIAR UMA FUNÇÃO PARA FAZER A ADIÇÃO DE BOTÃO

//PASSO 1: Mapear o elemento
//Neste caso queremos mapear o valor que o usuário coloca no input
function addTask() {
   //PASSO 1: Mepear o elemento e pegar o valor dele
    const taskTitle = document.querySelector("#task-title").value;

  /*Vamos criar a parte de adição de tarefas com o if para fazer uma validação de dados
  Isso vai evitar que uma tarefa vazia seja criada*/
  
  if (taskTitle) {
    //PASSO 2: Mepear o elemento que tem a tarefa (neste caso é a lista do template)
    const template = document.querySelector(".template");

    //PASSO 3: Clonar a lista do template (clonar a lista do template)
    //podemos usar o método cloneNode para copiar um trecho html
    // se o argumento for true, copiar tudo o elemento, seus atributos e seus filhos, se for false copia o elemento e seus atributos, mas sem os filhos.
    const newTask = template.cloneNode(true);
    
    //PASSO 4: Adicionar um título na tarefa
    //Para tanto temos que mudar o título do span, que neste caso não tem texto e agora vai ter o texto que eu colocar no titlo
    newTask.querySelector(".task-title").textContent = taskTitle;
    
    //PASSO 5: Remover as classes template e hide da lista, pois elas não são mais necessárias
    newTask.classList.remove("template", "hide");

    //PASSO 6: Adicionar o nome da tarefa na lista clonada
    //Primeiro selecione a lista e depois adicione
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);

    //PASSO 7: Criar a opção de remover a tarefa da lista
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click" , function(){
        removeTask(this);
    });

    //PASSO 8: Adicionar a opção de completar tarefa
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click" , function(){
        completeTask(this);      
    })

    //PASSO 9: limpar o texto do input depois de usa-lo
    //Mapeie e passe o vlaor vazio para o titulo
    document.querySelector("#task-title").value="";   
  }
}

//AÇÃO 3: CRIAR FUNÇÃO REMOVER TAREFA (X)
function removeTask(task){
    task.parentNode.remove(true);  
}

//AÇÃO 4: CRIAR FUNÇÃO COMPLETAR TAREFA (✓)
function completeTask(task){
    const taskComplete = task.parentNode;   
    taskComplete.classList.toggle("done");
}

//AÇÃO 1: ADICIONAR O EVENTO DE CLIQUE AO PRIMEIRO BOTÃO

/*O objetivo final é que ao clicar nos botões um formulário seja enviado ao servidor
através de um evento de clique, estem é o comportamento default dos bottões.
Porém não queremos que isto aconteça com este primeiro botão, pois o objetivo dele é adicionar tarefas.
Para excluir este botão do comportamento default,
por isso usamos o prevenDefault*/

//PASSO 1: Mapear o elemento (neste caso é o primeiro botão)
const addBtn = document.querySelector("#add-btn");

//PASSO 2: Dicionar o evento no elemento mapeado (botão).
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
  //OBs a função addTask vai ser definidada na AÇÃO 2
});
