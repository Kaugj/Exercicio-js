// ATIVIDADE 1 — Verificação de maioridade

function verificarIdade() {
  // Pega o valor digitado no input (sempre vem como string) e converte para número
  const Idade = Number(document.getElementById("Idade").value);

  // Testa a condição: 18 ou mais é considerado maior de idade
  if (Idade >= 18) {
    // Escreve a mensagem dentro do elemento com id "Resultado"
    document.getElementById("Resultado").textContent = "Ele é maior de idade";
  }
  else {
    // Caso contrário (menor que 18), mostra a mensagem alternativa
    document.getElementById("Resultado").textContent = "Ele é menor de idade";
  }
}

// ATIVIDADE 2 — Classificação de número (positivo/negativo/zero)

function verificarNumero() {
  // Lê o input e converte para número
  const number = Number(document.getElementById("number").value);

  if (number > 0) {
    // Maior que zero → positivo
    document.getElementById("ResultadoNumeros").textContent = "O número é positivo.";
  } else if (number < 0) {
    // Só chega aqui se a primeira condição for falsa; testa se é negativo
    document.getElementById("ResultadoNumeros").textContent = "O número é negativo.";
  } else {
    // Se não é maior nem menor que zero, só resta ser exatamente zero
    document.getElementById("ResultadoNumeros").textContent = "O número é zero.";
  }
}

// ATIVIDADE 3 — Situação do aluno pela nota

function verificarNotaAluno() {
  // Lê a nota digitada e converte para número
  const nota = Number(document.getElementById("nota").value);

  if (nota >= 12) {
    // Faixa mais alta é testada primeiro
    document.getElementById("ResultadoNota").textContent = "Aprovado";
  } else if (nota >= 5) {
    // Já sabemos que nota < 12 (senão teria caído no if acima);
    // aqui só falta checar se é pelo menos 5
    document.getElementById("ResultadoNota").textContent = "Recuperação";
  } else {
    // Não é >= 12 nem >= 5 → está abaixo de 5
    document.getElementById("ResultadoNota").textContent = "Reprovado";
  }
}

// ATIVIDADE 4 — Prioridade com switch/case
function verificarPrioridade() {
  // Pega o texto digitado no campo de prioridade
  const entrada = document.getElementById("prioridade").value;

  // Normaliza o texto: tudo em minúsculas e sem espaços nas pontas,
  // assim "URGENTE ", "urgente" e " Urgente" caem no mesmo case
  const prioridade = entrada.toLowerCase().trim();

  let mensagem;

  // switch compara "prioridade" com cada "case" até achar uma igualdade exata
  switch (prioridade) {
    case "urgente":
      mensagem = "Atenção redobrada!";
      break; // break impede que o código "vaze" para o próximo case

    case "alta":
      mensagem = "Prioridade alta.";
      break;

    case "media":
      mensagem = "Prioridade média.";
      break;

    case "baixa":
      mensagem = "Prioridade baixa.";
      break;

    default:
      // default roda quando nenhum case bateu (texto inválido/desconhecido)
      mensagem = "Prioridade desconhecida.";
  }

  // Exibe a resposta na tela
  document.getElementById("Prioridade").innerText = mensagem;
}

// ATIVIDADE 5 — Tarefa atrasada (&& e ||)

function verificarTarefa() {
  // Lê a prioridade digitada (texto)
  const prioridade = document.getElementById("prioridade").value;

  // .checked lê o estado de uma checkbox: true (marcada) ou false (desmarcada)
  const atrasada = document.getElementById("atrasada").checked;

  // Precisa de atenção se: prioridade é urgente
  // OU (prioridade é alta E a tarefa está atrasada)
  // Os parênteses deixam explícito que o && é avaliado antes do ||
  if (prioridade === "urgente" || (prioridade === "alta" && atrasada)) {
    document.getElementById("ResultadoTarefa").textContent = "Precisa de atenção agora!";
  } else {
    document.getElementById("ResultadoTarefa").textContent = "Pode aguardar.";
  }
}

// ATIVIDADE 6 — Login simples

// Valores fixos "corretos" para comparação (fora da função, então são globais)
const usuario = "admin"; // informação fixa a ser considerada no momento da digitação como correta
const senha = "1234";    // informação fixa a ser considerada no momento da digitação como correta

function verificarLogin() {
  const usuarioDigitado = document.getElementById("inputUsuario").value; // chama o input
  const senhaDigitada = document.getElementById("inputSenha").value;     // chama o input

  let mensagem;

  // Caso 1: usuário e senha batem exatamente com os valores corretos
  if (usuarioDigitado === usuario && senhaDigitada === senha) { // verfica se as informações digitadas estão corretas e se estiverem aparece a mensagem de sucesso
    mensagem = "Login realizado com sucesso!";
  }
  // Caso 2: usuário certo, mas a senha não bate
  else if (usuarioDigitado === usuario && senhaDigitada !== senha) { // verifica se a senha está incorreta e se estiver mostra a mensagem de erro de senha
    mensagem = "Senha incorreta.";
  }
  // Caso 3: sobrou isso — o usuário não é "admin"
  else { // caso nenhuma das mensagens anteriores não dê certo esta mensagem é acionada
    mensagem = "Usuário não encontrado.";
  }

  document.getElementById("resultado6").textContent = mensagem;
}

// ATIVIDADE 7 — Maioridade com operador ternário

function verificarIdade1() {
  // Lê o valor do input (aqui ficou como string, sem o Number() na frente)
  const idade1 = document.getElementById("idade1").value;

  // Operador ternário: condição ? valorSeVerdadeiro : valorSeFalso
  // É um jeito compacto de escrever um if/else que só define uma variável
  const situacao = idade1 >= 18 ? "maior de idade" : "menor de idade";

  document.getElementById("situacao").innerText = situacao;
}

// ATIVIDADE 8 — Sistema de desconto

function calcularDesconto() {
  // 1. Lendo os valores digitados no HTML
  const valorCompra = Number(document.getElementById("inputValor").value); // converte texto em número
  const clienteVip = document.getElementById("inputVip").checked;          // true ou false direto da checkbox

  // 2. Define o percentual de desconto conforme a faixa de valor
  let percentualDesconto;

  if (valorCompra > 500) {
    percentualDesconto = 20;
  } else if (valorCompra >= 200 && valorCompra <= 500) {
    // combina duas condições com && : "maior ou igual a 200" E "menor ou igual a 500"
    percentualDesconto = 10;
  } else {
    percentualDesconto = 0;
  }

  // Bônus VIP: é um if separado (não else if) porque pode se somar
  // a qualquer uma das faixas acima, não é uma alternativa a elas
  if (clienteVip) {
    percentualDesconto += 0, 5; // mesmo que percentualDesconto = percentualDesconto + 5
  }

  // Calcula o valor do desconto em reais e o valor final da compra
  const valorDesconto = valorCompra * (percentualDesconto / 100);
  const valorFinal = valorCompra - valorDesconto;

  // 3. Escreve o resultado de volta no HTML
  // innerHTML (em vez de textContent) porque os <br> precisam virar quebras de linha reais
  document.getElementById("resultado").innerHTML = `
    Valor da compra: R$ ${valorCompra}<br>
    Desconto: R$ ${valorDesconto.toFixed(2)}<br>
    Valor final: R$ ${valorFinal.toFixed(2)}
  `; // toFixed(2) arredonda para 2 casas decimais, formato de dinheiro
}

// ATIVIDADE 9 

const tarefa = {
    titulo: "Estudar JavaScript",
    concluida: false
};

function marcarComoConcluida(tarefa) {
  if (!tarefa) {
    document.getElementById("resultado9").textContent = "Nenhuma tarefa foi informada!";
    return;
  }

  if (tarefa.concluida) {
    document.getElementById("resultado9").textContent = "Esta tarefa já foi concluída.";
    atualizarTela();
    return;
  }

  tarefa.concluida = true;
  document.getElementById("resultado9").textContent = "Tarefa concluída com sucesso!";
  atualizarTela();
}

// só para mostrar o estado atual do objeto na página
function atualizarTela() {
  document.getElementById("tituloTarefa").textContent = tarefa.titulo;
  document.getElementById("statusTarefa").textContent = tarefa.concluida ? "Concluída" : "Pendente";
}

atualizarTela(); // roda uma vez ao carregar a página, pra mostrar o estado inicial
