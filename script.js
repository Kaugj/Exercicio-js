// atividade 1

function verificarIdade() {
    const Idade = Number(document.getElementById("Idade").value);

    if ( Idade >= 18){
        document.getElementById("Resultado").textContent = "Ele é maior de idade";
    }
    else {
        document.getElementById("Resultado").textContent = "Ele é menor de idade";
    }
}
 
// atividade 2

function verificarNumero(){
    const number = Number(document.getElementById("number").value);

    if (number > 0) {
      document.getElementById("ResultadoNumeros").textContent ="O número é positivo.";
    } else if (number < 0) {
      document.getElementById("ResultadoNumeros").textContent ="O número é negativo.";
    } else {
      document.getElementById("ResultadoNumeros").textContent ="O número é zero.";
    }
}

//atividade 3

function verificarNotaAluno() {
    const nota = Number(document.getElementById("nota").value);

    if (nota >= 12) {
      document.getElementById("ResultadoNota").textContent ="Aprovado";
    } else if (nota >= 5) {
      document.getElementById("ResultadoNota").textContent ="Recuperação";
    } else {
      document.getElementById("ResultadoNota").textContent ="Reprovado";
    }
}

// atividade 4

function verificarPrioridade() {
     const prioridade = Text(document.getElementById("prioridade").value);

      switch (prioridade) {
        case "urgente":
          document.getElementById("Resultado").textContent = "Atenção redobrada1";
          break;
      
        case "alta":
          document.getElementById("Resultado").textContent = "Prioridade alta.";
          break;
      
        case "media":
          document.getElementById("Resultado").textContent = "Prioridade média.";
          break;
      
        case "baixa":
          document.getElementById("Resultado").textContent = "Prioridade baixa.";
          break;
      
        default:
          document.getElementById("Resultado").textContent = "Prioridade dseconhecida.";
}
}

// atividade 4

function verificarPrioridade() {
     const entrada = document.getElementById("prioridade").value;
     const prioridade = entrada.toLowerCase().trim();

     let mensagem

      switch (prioridade) {
        case "urgente":
          mensagem = "Atenção redobrada!";
          break;
      
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
          mensagem = "Prioridade dseconhecida.";
}

// Exibe a resposta na tela
document.getElementById("Prioridade").innerText = mensagem;
}
