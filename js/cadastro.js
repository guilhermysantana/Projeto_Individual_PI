let temTamanho = false
let temEspecial = false
let temMaiuscula = false
let temMinuscula = false
let temNumero = false

function cadastrar() {
    let senha_usuario = ipt_senha.value
    let confirmacao_senha = ipt_confSenha.value

    erro_nome.innerHTML = ''
    erro_email.innerHTML = ''
    erro_senha.innerHTML = ''
    erro_confsenha.innerHTML = ''
    
    let valido = true


    // Verificação de vazio
    if (ipt_nome.value == '') {
        erro_nome.innerHTML = '<p style="color: #eb352f;">*Preencha com seu nome</p>'
        valido = false
    }

    if (ipt_email.value == '') {
        erro_email.innerHTML = '<p style="color: #eb352f;">*Preencha com seu email</p>'
        valido = false
    }

    if (ipt_senha.value == '') {
        erro_senha.innerHTML = '<p style="color: #eb352f;">*Crie uma senha</p>'
        valido = false
    }

    if (ipt_confSenha.value == '') {
        erro_confsenha.innerHTML = '<p style="color: #eb352f;">*Confirme sua senha</p>'
        valido = false
    }

    if (valido == false) {
        return
    }

    senha()

    // Senhas iguais
    if (senha_usuario != confirmacao_senha) {
        erro_confsenha.innerHTML = '<p style="color: #eb352f;">*As senhas são diferentes</p>'
        return
    }

    // Se tudo estiver certo
    if (temTamanho && temNumero && temMinuscula && temMaiuscula && temEspecial) {
        window.location.href = '../telas/inicio.html'
    }
}

function senha() {
    let senha_usuario = ipt_senha.value

    temNumero = false
    temEspecial = false

    // Regra de tamanho
    if (senha_usuario.length < 6 || senha_usuario.length > 12) {
        temTamanho = false
        regraTamanho.innerHTML = '<p style="color: #eb352f;">- Conter de 6 a 12 caracteres</p>'
    } else {
        temTamanho = true
        regraTamanho.innerHTML = '<p style="color: #26b14d;">- Conter de 6 a 12 caracteres</p>'
    }

    // Regra de número
    for (let i = 0; i < senha_usuario.length; i++) {
        if ('0123456789'.includes(senha_usuario[i])) {
            temNumero = true
        }
    }

    if (temNumero == true) {
        regraNumero.innerHTML = '<p style="color: #26b14d;">- Pelo menos um número (0-9)</p>'
    } else {
        regraNumero.innerHTML = '<p style="color: #eb352f;">- Pelo menos um número (0-9)</p>'
    }

    // Regra de letra minúscula
    if (senha_usuario == senha_usuario.toUpperCase()) {
        temMinuscula = false
        regraMinuscula.innerHTML = '<p style="color: #eb352f;">- Pelo menos uma letra minúscula (a-z)</p>'
    } else {
        temMinuscula = true
        regraMinuscula.innerHTML = '<p style="color: #26b14d;">- Pelo menos uma letra minúscula (a-z)</p>'
    }

    // Regra de letra maiúscula
    if (senha_usuario == senha_usuario.toLowerCase()) {
        temMaiuscula = false
        regraMaiuscula.innerHTML = '<p style="color: #eb352f;">- Pelo menos uma letra maiúscula (A-Z)</p>'
    } else {
        temMaiuscula = true
        regraMaiuscula.innerHTML = '<p style="color: #26b14d;">- Pelo menos uma letra maiúscula (A-Z)</p>'
    }

    // Regra de caractere especial
    for (let i = 0; i < senha_usuario.length; i++) {
        if ('!@#$%&'.includes(senha_usuario[i])) {
            temEspecial = true
        }
    }

    if (temEspecial == true) {
        regraEspecial.innerHTML = '<p style="color: #26b14d;">- Pelo menos um caractere especial (!@#$%&)</p>'
    } else {
        regraEspecial.innerHTML = '<p style="color: #eb352f;">- Pelo menos um caractere especial (!@#$%&)</p>'
    }
}