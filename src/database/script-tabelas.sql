
/*
comandos para mysql server
*/

CREATE DATABASE redDeadWeb;

USE redDeadWeb;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(12) NOT NULL
);