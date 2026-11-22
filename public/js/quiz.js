const listaDeQuestoes = [
    {
        pergunta: "Dutch planeja um golpe arriscado e você acha que vai dar errado. O que você faz?",
        area: 0,
        alternativaA: "Cumpro a ordem sem dizer nada.",
        pontosA: 1,
        alternativaB: "Falo o que penso, mas fico com o grupo.",
        pontosB: 2,
        alternativaC: "Saio da gangue antes que dê problema.",
        pontosC: 0
    },
    {
        pergunta: "Um companheiro da gangue foi capturado pela lei. Qual é a sua atitude?",
        area: 0,
        alternativaA: "Deixo para lá, cada um responde por si.",
        pontosA: 0,
        alternativaB: "Arrisco a vida para resgatá-lo.",
        pontosB: 2,
        alternativaC: "Resgato só se houver pouco risco.",
        pontosC: 1
    },
    {
        pergunta: "Você descobre que fez mal a uma família no passado. O que você faz?",
        area: 1,
        alternativaA: "Finjo que não é comigo.",
        pontosA: 0,
        alternativaB: "Deixo algum dinheiro, sem me expor.",
        pontosB: 1,
        alternativaC: "Peço desculpas e tento reparar o dano.",
        pontosC: 2
    },
    {
        pergunta: "Um jovem da gangue quer abandonar a vida de crimes. Como você reage?",
        area: 1,
        alternativaA: "Digo que ninguém foge do passado.",
        pontosA: 0,
        alternativaB: "Não me meto, a escolha é dele.",
        pontosB: 1,
        alternativaC: "Ajudo ele a ir embora em segurança.",
        pontosC: 2
    },
    {
        pergunta: "Um viajante ferido pede ajuda na estrada e você está com pressa. O que faz?",
        area: 2,
        alternativaA: "Paro, cuido dele e levo até a cidade.",
        pontosA: 2,
        alternativaB: "Deixo comida e água e continuo.",
        pontosB: 1,
        alternativaC: "Sigo meu caminho.",
        pontosC: 0
    },
    {
        pergunta: "Uma viúva está prestes a perder a fazenda por causa de dívidas. Qual é a sua atitude?",
        area: 2,
        alternativaA: "Aconselho que procure o xerife.",
        pontosA: 1,
        alternativaB: "Não é problema meu.",
        pontosB: 0,
        alternativaC: "Ajudo a quitar a dívida.",
        pontosC: 2
    },
    {
        pergunta: "Você vê um xerife corrupto cobrando propina dos moradores. O que você faz?",
        area: 3,
        alternativaA: "Aviso os moradores para se protegerem.",
        pontosA: 1,
        alternativaB: "Finjo que não vi.",
        pontosB: 0,
        alternativaC: "Enfrento ele para proteger os moradores.",
        pontosC: 2
    },
    {
        pergunta: "Você encontra uma carteira cheia de dinheiro caída na rua. O que faz?",
        area: 3,
        alternativaA: "Fico com tudo.",
        pontosA: 0,
        alternativaB: "Fico com metade e devolvo o resto.",
        pontosB: 1,
        alternativaC: "Devolvo ao dono, sem pedir nada.",
        pontosC: 2
    },
    {
        pergunta: "Um antigo inimigo implora por piedade depois de perder uma briga. Como você age?",
        area: 4,
        alternativaA: "Acabo com ele, sem dó.",
        pontosA: 0,
        alternativaB: "Deixo ele ir, mas aviso que não terá outra chance.",
        pontosB: 1,
        alternativaC: "Mostro misericórdia e deixo ele ir.",
        pontosC: 2
    },
    {
        pergunta: "Um amigo traiu a sua confiança, mas diz estar arrependido. O que você faz?",
        area: 4,
        alternativaA: "Perdoo, mas passo a vigiá-lo.",
        pontosA: 1,
        alternativaB: "Rompo a amizade para sempre.",
        pontosB: 0,
        alternativaC: "Ouço ele e dou uma segunda chance.",
        pontosC: 2
    }
]

const quantidadeDeQuestoes = listaDeQuestoes.length
const pontosPorArea = [0, 0, 0, 0, 0]

let numeroDaQuestaoAtual = 0
let pontuacaoFinal = 0

function iniciarQuiz() {
    telaInicio.style.display = 'none'
    telaQuiz.style.display = 'block'
    totalQuestoes.innerHTML = quantidadeDeQuestoes
    mostrarQuestao()
}

function mostrarQuestao() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual]

    numeroQuestao.innerHTML = numeroDaQuestaoAtual + 1
    textoPergunta.innerHTML = questaoAtual.pergunta
    textoOpcaoA.innerHTML = questaoAtual.alternativaA
    textoOpcaoB.innerHTML = questaoAtual.alternativaB
    textoOpcaoC.innerHTML = questaoAtual.alternativaC

    ipt_opcaoA.checked = false
    ipt_opcaoB.checked = false
    ipt_opcaoC.checked = false

    barraProgresso.style.width = (numeroDaQuestaoAtual / quantidadeDeQuestoes * 100) + '%'

    if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
        botaoResponder.innerHTML = 'Ver resultado'
    } else {
        botaoResponder.innerHTML = 'Próxima'
    }
}

function responder() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual]
    let pontos = 0

    if (ipt_opcaoA.checked) {
        pontos = questaoAtual.pontosA
    } else if (ipt_opcaoB.checked) {
        pontos = questaoAtual.pontosB
    } else if (ipt_opcaoC.checked) {
        pontos = questaoAtual.pontosC
    } else {
        alert('Escolha uma opção para continuar.')
        return
    }

    pontuacaoFinal += pontos
    pontosPorArea[questaoAtual.area] += pontos
    numeroDaQuestaoAtual++

    if (numeroDaQuestaoAtual == quantidadeDeQuestoes) {
        finalizarQuiz()
    } else {
        mostrarQuestao()
    }
}

function finalizarQuiz() {
    let idPersonagem = 0
    let nivel = ''
    let personagem = ''
    let imagem = ''
    let descricao = ''

    if (pontuacaoFinal >= 18) {
        idPersonagem = 1
        nivel = 'Honra Máxima'
        personagem = 'Charles Smith'
        imagem = 'assets/Charles Smith.jpg'
        descricao = 'Calmo, justo e de bússola moral firme, como Charles. Você faz o certo mesmo quando ninguém está olhando.'
    } else if (pontuacaoFinal >= 14) {
        idPersonagem = 2
        nivel = 'Honra Alta'
        personagem = 'Arthur Morgan'
        imagem = 'assets/Arthur Morgan.jpg'
        descricao = 'Você se aproxima do lado honrado de Arthur: leal, disposto a ajudar e capaz de questionar as próprias escolhas.'
    } else if (pontuacaoFinal >= 9) {
        idPersonagem = 3
        nivel = 'Honra Média'
        personagem = 'John Marston'
        imagem = 'assets/John Marston.jpg'
        descricao = 'Como John, você já errou, mas tenta equilibrar o que é certo com o que é necessário para proteger quem ama.'
    } else if (pontuacaoFinal >= 5) {
        idPersonagem = 4
        nivel = 'Honra Baixa'
        personagem = 'Dutch van der Linde'
        imagem = 'assets/Dutch van der Linde.jpg'
        descricao = 'Como Dutch, você acredita nos seus ideais, mas está disposto a dobrar as regras para alcançá-los.'
    } else {
        idPersonagem = 5
        nivel = 'Outlaw / Fora da Lei'
        personagem = 'Micah Bell'
        imagem = 'assets/Micah Bell.jpg'
        descricao = 'Suas respostas lembram o individualismo de Micah: você prioriza o próprio interesse e aceita medidas duras para conseguir o que quer.'
    }

    fetch("/resultados/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO,
            fkPersonagemServer: idPersonagem,
            pontuacaoServer: pontuacaoFinal,
            lealdadeServer: pontosPorArea[0],
            redencaoServer: pontosPorArea[1],
            ajudaServer: pontosPorArea[2],
            justicaServer: pontosPorArea[3],
            perdaoServer: pontosPorArea[4]
        })
    }).then(function (resposta) {
        if (resposta.ok == false) {
            alert('Não foi possível salvar o seu resultado.')
        }
    })

    telaQuiz.style.display = 'none'
    telaResultado.style.display = 'block'

    imgPersonagem.src = imagem
    imgPersonagem.alt = personagem
    nomePersonagem.innerHTML = personagem
    descricaoPersonagem.innerHTML = descricao
    nivelResultado.innerHTML = nivel
    pontuacaoResultado.innerHTML = pontuacaoFinal + ' / 20'
}

function verDashboard() {
    window.location.href = 'tela_dashboard.html'
}

function refazerQuiz() {
    window.location.reload()
}