function entrar(){
    let email_usuario = ipt_email.value
    let senha_usuario = ipt_senha.value

    erro_email.innerHTML = ''
    erro_senha.innerHTML = ''
    erro.innerHTML = ''

    if (email_usuario == ''){
        erro_email.innerHTML = '<p style="color: #eb352f;">Insira seu email</p>'
    }
    if (senha_usuario == ''){
        erro_senha.innerHTML = '<p style="color: #eb352f;">Insira sua senha</p>'
        return
    }

    if ((email_usuario != 'gui@gmail.com') || (senha_usuario != '1234')) {
        erro.innerHTML = `<p style='color: red;'> <br>Credenciais incorretas! Tente novamente.</p>`
    } else {
        erro.innerHTML = `<p style='color: green;'> <br>Iniciando Sessão!</p>`
        window.location.href = '../telas/inicio.html'
    }
}