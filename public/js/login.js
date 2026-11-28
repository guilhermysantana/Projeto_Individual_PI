function entrar() {
    aguardar();

    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;

    erro_email.innerHTML = '';
    erro_senha.innerHTML = '';
    erro.innerHTML = '';
    div_erros_login.innerHTML = '';
    div_erros_login.style.display = 'none';

    var valido = true;

    if (emailVar == '') {
        erro_email.innerHTML = '<p style="color: #eb352f;">Insira seu email</p>';
        valido = false;
    }

    if (senhaVar == '') {
        erro_senha.innerHTML = '<p style="color: #eb352f;">Insira sua senha</p>';
        valido = false;
    }

    if (valido == false) {
        finalizarAguardar();
        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            resposta.json().then(function (json) {

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "index.html";
                }, 1000);

            });

        } else {
            resposta.text().then(function (texto) {
                finalizarAguardar("Credenciais incorretas! Tente novamente.");
            });
        }

    }).catch(function (erro) {
        console.log(erro);
        finalizarAguardar("Não foi possível conectar ao servidor.");
    });

    return false;
}

function sumirMensagem() {
    erro.innerHTML = '';
}
