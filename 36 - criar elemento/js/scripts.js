// ADICIONANDO CONTEÚDO EM UMA DIV USANDO JS


// PASSO 1: Mapeie o local onde o elemento vai entrar (neste caso a body)
// pode usar querySelector ou getElementById
const body = document.querySelector("body");

// PASSO 2: Crie o elemento (por exemplo, um p)
const paragrafo = document.createElement("p");

// PASSO 3: Adicione o conteúdo no elemento usando textContent
paragrafo.textContent = "Este é o conteúdo do parágrafo";

// PASSO 4: Adicione o elemento no local mapeado (a body neste caso)
body.appendChild(paragrafo);

console.log(paragrafo);



