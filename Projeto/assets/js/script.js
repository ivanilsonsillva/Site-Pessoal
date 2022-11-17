
/* nome */

let nome = document.querySelector ('#nome')
let erroNome = document.querySelector ('#erroNome')

/* email */

let email = document.querySelector ('#email')
let erroEmail = document.querySelector ('#erroEmail')

/* assunto */

let assunto = document.querySelector ('#assunto')
let erroAssunto = document.querySelector ('#erroAssunto')

let nomeOK = false
let emailOK = false
let assuntoOK = false

let mapa = document.querySelector ('#mapa')

function validaNome(){
    // @ts-ignore
    if(nome.value.length < 3){
    // @ts-ignore
    erroNome.innerHTML = 'Nome Inválido'
}else{
    // @ts-ignore
    erroNome.innerHTML = ''
    nomeOK = true
}
}

function validaEmail(){
    // @ts-ignore
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        // @ts-ignore
        erroEmail.innerHTML = 'Email Iválido'
    }else{
        // @ts-ignore
        erroEmail.innerHTML = ''
        emailOK = true
}
}

function validaAssunto(){
    // @ts-ignore
    if(assunto.value.length > 100){
        // @ts-ignore
        erroAssunto.innerHTML = 'Limite de caracteres excedido'
    }else{
        // @ts-ignore
        erroAssunto.innerHTML = ''
        assuntoOK = true
}
}
function enviar(){
    if(nomeOK && emailOK && assuntoOK){
    alert('Email enviado com sucesso!')
}else{
    alert('Preencha as informações corretamente')
}
}
function mapaZoom(){
    // @ts-ignore
    mapa.style.width = '500px'
    // @ts-ignore
    mapa.style.height = '400px'
}
function mapaNormal(){
    // @ts-ignore
    mapa.style.width = '400px'
    // @ts-ignore
    mapa.style.height = '250px'
}


     