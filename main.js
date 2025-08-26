const form = document.getElementById("formNotas");
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const notaMinima = parseFloat(document.getElementById("notaMinima").value);
    const notaAluno = parseFloat(document.getElementById("notaAluno").value);

    if (notaAluno > notaMinima) {
        mensagem.textContent = "Aprovado! A nota do aluno é maior que a nota mínima.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Reprovado! A nota do aluno não atingiu a nota mínima.";
        mensagem.style.color = "red";
    }
});