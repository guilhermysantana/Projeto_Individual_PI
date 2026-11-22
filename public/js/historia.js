// Carrossel dos personagens
const nomes = ['Arthur Morgan', 'Dutch van der Linde', 'John Marston', 'Hosea Matthews', 'Micah Bell', 'Sadie Adler', 'Charles Smith', 'Abigail Roberts', 'Jack Marston']
const funcoes = ['PROTAGONISTA/BRAÇO DIREITO', 'LÍDER/IDEALISTA', 'FORA DA LEI EM CONFLITO', 'COFUNDADOR/ESTRATEGISTA', 'PISTOLEIRO/CATALISADOR DE CONFLITOS', 'VIÚVA/CAÇADORA DE RECOMPENSAS', 'RASTREADOR/BATEDOR', 'MÃE/CONCIÊNCIA MORAL', 'FILHO/FUTURO DA FAMÍLIA']
const imagens = ['assets/Arthur Morgan.jpg', 'assets/Dutch van der Linde.jpg', 'assets/John Marston.jpg', 'assets/Hosea Matthews.jpg', 'assets/Micah Bell.jpg', 'assets/Sadie Adler.jpg', 'assets/Charles Smith.jpg', 'assets/Abigail Roberts.jpg', 'assets/Jack Marston.jpg']
const textos = [
    'O principal executor da gangue Van der Linde. Criado por Dutch desde jovem, Arthur é um fora da lei implacável que começa a questionar sua própria lealdade e moralidade à medida que o cerco da lei se fecha.',
    'O fundador carismático da gangue. Ele prega a liberdade contra as regras da civilização moderna, mas sua obsessão por um último grande golpe e a pressão constante colocam sua sanidade e o grupo em risco.',
    'Outro jovem criado por Dutch, mas que mantém uma relação conturbada com a gangue após abandoná-la temporariamente. Ele precisa amadurecer à força para proteger sua família e garantir um futuro longe do crime.',
    'O parceiro mais antigo de Dutch e a voz da razão do grupo. Inteligente e diplomático, Hosea prefere resolver problemas com lábia e golpes elaborados em vez de tiroteios desnecessários.',
    'Um fora da lei impulsivo, violento e imprevisível que entrou recentemente para a gangue. Sua influência tóxica sobre Dutch gera constantes atritos internos, especialmente com Arthur.',
    "Resgatada pela gangue após ter sua vida destruída pelos O'Driscolls, ela deixa para trás o papel de vítima para se tornar uma das combatentes mais ferozes, destemidas e leais ao lado de Arthur.",
    'Um caçador habilidoso, calmo e reservado. Apesar de ser um membro relativamente novo, destaca-se por sua forte bússola moral, tornando-se um dos aliados mais confiáveis nos momentos de crise.',
    'Uma mulher forte e pragmática que cresceu na gangue. Seu único objetivo é convencer John a abandonar a vida de fora da lei para que possam criar seu filho em paz e segurança.',
    'O filho pequeno de John e Abigail, criado na estrada cercado por fora da lei. Ele representa a inocência no meio do caos e é a principal motivação para os sacrifícios feitos pelos adultos ao seu redor',
    
]

let posicao = 0

function mostrar() {
    let indice1 = posicao
    let indice2 = posicao + 1
    let indice3 = posicao + 2

    if (indice2 >= nomes.length) {
        indice2 = indice2 - nomes.length
    }

    if (indice3 >= nomes.length) {
        indice3 = indice3 - nomes.length
    }

    imgPersonagem1.src = imagens[indice1]
    imgPersonagem1.alt = nomes[indice1]
    nomePersonagem1.innerHTML = nomes[indice1]
    funcaoPersonagem1.innerHTML = funcoes[indice1]
    textoPersonagem1.innerHTML = textos[indice1]

    imgPersonagem2.src = imagens[indice2]
    imgPersonagem2.alt = nomes[indice2]
    nomePersonagem2.innerHTML = nomes[indice2]
    funcaoPersonagem2.innerHTML = funcoes[indice2]
    textoPersonagem2.innerHTML = textos[indice2]

    imgPersonagem3.src = imagens[indice3]
    imgPersonagem3.alt = nomes[indice3]
    nomePersonagem3.innerHTML = nomes[indice3]
    funcaoPersonagem3.innerHTML = funcoes[indice3]
    textoPersonagem3.innerHTML = textos[indice3]

    contador.innerHTML = (posicao + 1) + ' / ' + nomes.length
}

function proximo() {
    posicao++
    if (posicao == nomes.length) {
        posicao = 0
    }
    mostrar()
}

function anterior() {
    posicao--
    if (posicao < 0) {
        posicao = nomes.length - 1
    }
    mostrar()
}

mostrar()


// Carrossel das cidades
const nomesCidades = ['Saint Denis', 'Valentine', 'Rhodes', 'Strawberry', 'Annesburg', 'Blackwater', 'Armadillo', 'Tumbleweed']
const estadosCidades = ['— LEMOYNE —', '— NEW HANOVER —', '— LEMOYNE —', '— WEST ELIZABETH —', '— NEW HANOVER —', '— WEST ELIZABETH —', '— NEW AUSTIN —', '— NEW AUSTIN —']
const imagensCidades = ['assets/SaintDenis.jpg', 'assets/Valentine.jpg', 'assets/Rhodes.jpg', 'assets/Strawberry.jpg', 'assets/Annesburg.jpg', 'assets/Blackwater.jpg', 'assets/Armadillo.jpg', 'assets/Tumbleweed.jpg']
const textosCidades = [
    'Inspirada em Nova Orleans, essa metrópole industrializada simboliza o fim da era dos fora-da-lei e a chegada da modernidade. Com bondes elétricos, mansões luxuosas e fábricas poluídas, a cidade tem uma força policial implacável e ruas sempre lotadas.',
    'Valentine é o retrato clássico do Velho Oeste, com ruas lamacentas, leilões de gado e movimento constante. É a primeira grande cidade que o jogador explora, sendo famosa por suas brigas de bar e pela presença constante de caubóis e fora-da-lei.',
    'Marcada pela terra vermelha e pelo calor do sul, Rhodes carrega as cicatrizes da Guerra Civil Americana. A cidade parece tranquila, mas vive sob a tensão de uma rivalidade sangrenta entre duas famílias ricas da região: os Gray e os Braithwaite.',
    'Escondida entre as montanhas, Strawberry é uma charmosa vila madeireira cortada por um riacho. Seu prefeito tenta transformá-la em um destino turístico de luxo, motivo pelo qual a cidade não possui nenhum saloon.',
    'Um retrato duro da revolução industrial na fronteira. Annesburg vive exclusivamente da mineração de carvão, com céu cinzento, água poluída e operários trabalhando em condições precárias sob o domínio de uma mineradora gananciosa.',
    'Uma cidade portuária em rápida modernização, misturando prédios de tijolos com o estilo rústico do oeste. É o palco do famoso assalto que deu errado antes do jogo começar, ficando inacessível para Arthur Morgan durante a campanha principal.',
    'Cenário clássico do primeiro jogo, Armadillo aparece em RDR2 devastada por um surto brutal de cólera. Com covas abertas e poucos moradores sobreviventes, a cidade desértica tem um clima desolado e melancólico.',
    'Antes de virar a cidade fantasma do primeiro jogo, Tumbleweed ainda está ativa em RDR2 no meio do deserto. A ordem local é mantida com mão de ferro pelo xerife Sam Freeman, que executa criminosos sem hesitar.'
]

let posicaoCidade = 0

function mostrarCidades() {
    const cidade1 = posicaoCidade
    let cidade2 = posicaoCidade + 1
    let cidade3 = posicaoCidade + 2

    if (cidade2 >= nomesCidades.length) {
        cidade2 = cidade2 - nomesCidades.length
    }

    if (cidade3 >= nomesCidades.length) {
        cidade3 = cidade3 - nomesCidades.length
    }

    imgCidade1.src = imagensCidades[cidade1]
    imgCidade1.alt = nomesCidades[cidade1]
    nomeCidade1.innerHTML = nomesCidades[cidade1]
    estadoCidade1.innerHTML = estadosCidades[cidade1]
    textoCidade1.innerHTML = textosCidades[cidade1]

    imgCidade2.src = imagensCidades[cidade2]
    imgCidade2.alt = nomesCidades[cidade2]
    nomeCidade2.innerHTML = nomesCidades[cidade2]
    estadoCidade2.innerHTML = estadosCidades[cidade2]
    textoCidade2.innerHTML = textosCidades[cidade2]

    imgCidade3.src = imagensCidades[cidade3]
    imgCidade3.alt = nomesCidades[cidade3]
    nomeCidade3.innerHTML = nomesCidades[cidade3]
    estadoCidade3.innerHTML = estadosCidades[cidade3]
    textoCidade3.innerHTML = textosCidades[cidade3]

    contadorCidades.innerHTML = (posicaoCidade + 1) + ' / ' + nomesCidades.length
}

function proximaCidade() {
    posicaoCidade++
    if (posicaoCidade == nomesCidades.length) {
        posicaoCidade = 0
    }
    mostrarCidades()
}

function anteriorCidade() {
    posicaoCidade--
    if (posicaoCidade < 0) {
        posicaoCidade = nomesCidades.length - 1
    }
    mostrarCidades()
}

mostrarCidades()