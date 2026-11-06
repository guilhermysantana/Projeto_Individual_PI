function entrar(){
    let email_usuario = ipt_email.value
    let senha_usuario = ipt_senha.value

    if ((email_usuario != 'gui@gmail.com') || (senha_usuario != '1234')) {
        erro.innerHTML = `<p style='color: red;'> <br>Credenciais incorretas! Tente novamente.</p>`
    } else {
        erro.innerHTML = `<p style='color: green;'> <br>Iniciando Sessão!</p>`
        window.location.href = '../telas/inicio.html'
    }
}