function mostrarUsuario() {
    if (sessionStorage.EMAIL_USUARIO != undefined) {
        linkEntrar.style.display = "none";

        linkPerfil.style.display = "inline";
        linkPerfil.innerHTML = sessionStorage.NOME_USUARIO;

        linkSair.style.display = "inline";
    } else {
        linkEntrar.style.display = "inline";
        linkPerfil.style.display = "none";
        linkSair.style.display = "none";
    }
}

function validarSessao() {
    if (sessionStorage.EMAIL_USUARIO == null) {
        window.location.href = 'tela_login.html';
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location.href = 'tela_login.html';
}

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");

    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    } else {
        divErrosLogin.style.display = "none";
        divErrosLogin.innerHTML = "";
    }
}

mostrarUsuario();
