function mostrarUsuario() {
    const nome = sessionStorage.NOME_USUARIO

    if (nome != null) {
        linkPerfil.innerHTML = nome
        linkPerfil.href = '#'
        linkSair.style.display = 'block'
    }
}

function validarSessao() {
    if (sessionStorage.EMAIL_USUARIO == null) {
        window.location.href = 'tela_login.html'
    }
}

function limparSessao() {
    sessionStorage.clear()
    window.location.href = 'tela_login.html'
}

mostrarUsuario()