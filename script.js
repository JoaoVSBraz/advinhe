const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]



function fazerPergunta() {
  const root = document.getElementById('root')
  const btnPerguntar = document.getElementById('btn-perguntar')
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  function componentePergunta() {
    const inputPergunta = document.getElementById('input-pergunta')
    if (inputPergunta.value == '') {
      alert('Digite uma pergunta!')
      return
    }

    btnPerguntar.setAttribute('disabled', true)

    return `
      <div id="pergunta">${inputPergunta.value}</div>
      `
  }

  function componenteResposta() {
    root.style.opacity = 1

    return ` 
      <div id="resposta">${respostas[numeroAleatorio]}</div>
    `
  }

  setTimeout(() => {
    root.style.opacity = 0
    btnPerguntar.removeAttribute('disabled')
  }, 3000)

  root.innerHTML = componentePergunta() + componenteResposta()

}