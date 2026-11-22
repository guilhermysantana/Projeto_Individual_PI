function entrar() {
    let email_usuario = ipt_email.value
    let senha_usuario = ipt_senha.value

    erro_email.innerHTML = ''
    erro_senha.innerHTML = ''
    erro.innerHTML = ''

    let valido = true

    if (email_usuario == '') {
        erro_email.innerHTML = '<p style="color: #eb352f;">Insira seu email</p>'
        valido = false
    }

    if (senha_usuario == '') {
        erro_senha.innerHTML = '<p style="color: #eb352f;">Insira sua senha</p>'
        valido = false
    }

    if (valido == false) {
        return
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            emailServer: email_usuario,
            senhaServer: senha_usuario
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (json) {
                sessionStorage.ID_USUARIO = json.id
                sessionStorage.NOME_USUARIO = json.nome
                sessionStorage.EMAIL_USUARIO = json.email
                erro.innerHTML = `<p style='color: green;'> <br>Iniciando Sessão!</p>`
                window.location.href = 'index.html'
            })
        } else {
            erro.innerHTML = `<p style='color: red;'> <br>Credenciais incorretas! Tente novamente.</p>`
        }
    })
}