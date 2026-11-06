let temTamanho = false
let temMaiuscula = false
let temMinuscula = false


// '<span style="color: #26b14d;">
// '<span style="color: #eb352f;">

function cadastrar() {
    let nome_usuario = ipt_nome.value
    let email_usuario = ipt_email.value
    let senha_usuario = ipt_senha.value    
    let confirmacao_senha = ipt_confSenha.value

    let temEspecial = false
    let temNumero = false
    let senhaConfirmada = false
    

    // Verificação de vazio
    if(ipt_nome.value == ''){
        alert('Preencha com seu nome')
        return
    } else if(ipt_email.value == '') {
        alert('Preencha com seu email')
        return
    } else if(ipt_senha.value == '') {
        alert('Crie uma senha')
        return
    } else if (ipt_confSenha.value == '') {
        alert('Confirme sua senha')
        return
    }

    // Senhas iguais
    if(senha_usuario != confirmacao_senha){
        senhaConfirmada = false
        alert('Senhas diferentes')
    } else{
        senhaConfirmada = true
    }


    // Regra de tamanho
    if (senha_usuario.length < 6 || senha_usuario.length > 12) {
        temTamanho = false
        regraTamanho.innerHTML = '<p style="color: #eb352f;">- Conter de 6 a 12 caracteres</p>'
    } else {
        temTamanho = true
        regraTamanho.innerHTML = '<p style="color: #26b14d;">- Conter de 6 a 12 caracteres</p>'
    }


    // Regra de número
    for (i = 0; i < senha_usuario.length; i++) {
        if('0123456789'.includes(senha_usuario[i])) {
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
    for (i = 0; i < senha_usuario.length; i++) {
        if('!@#$%&'.includes(senha_usuario[i])) {
            temEspecial = true
        }
    }

    if (temEspecial == true) {
        regraEspecial.innerHTML = '<p style="color: #26b14d;">- Pelo menos um caractere especial (!@#$%&)</p>'
    } else {
        regraEspecial.innerHTML = '<p style="color: #eb352f;">- Pelo menos um caractere especial (!@#$%&)</p>'
    }

    // Se tudo estiver certo
    if(senhaConfirmada == true && temEspecial == true && temTamanho == true && temMaiuscula == true && temMinuscula == true && temNumero == true)
        window.location.href = '../telas/inicio.html'
}