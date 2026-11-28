CREATE DATABASE redDeadWeb;
USE redDeadWeb;

-- ===================================================================================================================================================
-- CRIAÇÃO DAS TABELAS
-- ===================================================================================================================================================

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(12) NOT NULL
);

CREATE TABLE personagem (
    idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    nivel VARCHAR(30) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    frase VARCHAR(200) NOT NULL,
    imagem VARCHAR(100) NOT NULL
);

CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    fkPersonagem INT NOT NULL,
    pontuacao INT NOT NULL,
    lealdade INT NOT NULL,
    redencao INT NOT NULL,
    ajuda INT NOT NULL,
    justica INT NOT NULL,
    perdao INT NOT NULL,
    dataConclusao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
);

-- ===================================================================================================================================================
-- INSERT'S
-- ===================================================================================================================================================

INSERT INTO personagem (nome, nivel, descricao, frase, imagem) VALUES
('Charles Smith', 'Honra Máxima', 'Calmo, justo e de bússola moral firme, como Charles. Você faz o certo mesmo quando ninguém está olhando.', 'Poucos mantêm a honra intacta na fronteira. Você é um deles.', 'assets/Charles Smith.jpg'),
('Arthur Morgan', 'Honra Alta', 'Você se aproxima do lado honrado de Arthur: leal, disposto a ajudar e capaz de questionar as próprias escolhas.', 'Um coração bom sob o chapéu empoeirado. Você erra, mas busca a redenção.', 'assets/Arthur Morgan.jpg'),
('John Marston', 'Honra Média', 'Como John, você já errou, mas tenta equilibrar o que é certo com o que é necessário para proteger quem ama.', 'Você vive na zona cinzenta: leal aos seus, desconfiado de todos.', 'assets/John Marston.jpg'),
('Dutch van der Linde', 'Honra Baixa', 'Como Dutch, você acredita nos seus ideais, mas está disposto a dobrar as regras para alcançá-los.', 'Bons planos e más escolhas. A lealdade cobra seu preço.', 'assets/Dutch van der Linde.jpg'),
('Micah Bell', 'Outlaw / Fora da Lei', 'Suas respostas lembram o individualismo de Micah: você prioriza o próprio interesse e aceita medidas duras para conseguir o que quer.', 'Cartazes de procurado levam seu rosto. Você segue apenas o próprio interesse.', 'assets/Micah Bell.jpg');

-- ===================================================================================================================================================
-- CRIAÇÃO DAS VIEWS
-- ===================================================================================================================================================

CREATE VIEW vw_resultado_personagem AS
SELECT
    r.idResultado, r.fkUsuario, r.pontuacao, r.lealdade, r.redencao, r.ajuda, r.justica, r.perdao,
    DATE_FORMAT(r.dataConclusao, '%d/%m %H:%i') AS momento_grafico, p.nome, p.nivel, p.descricao, p.frase, p.imagem
FROM resultado AS r
JOIN personagem AS p ON p.idPersonagem = r.fkPersonagem;

CREATE VIEW vw_kpi_geral AS
SELECT
    COUNT(*) AS totalTentativas,
    ROUND(AVG(pontuacao), 1) AS mediaGeral
FROM resultado;
