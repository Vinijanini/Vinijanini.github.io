var formacao = formacao = document.getElementById('divisao_formacao')
formacao.addEventListener('mouseenter', amplia_formacao)
formacao.addEventListener('mousemove', amplia_formacao)
formacao.addEventListener('touchstart', amplia_formacao)
formacao.addEventListener('mouseout', desamplia_formacao)
formacao.addEventListener('touchend', desamplia_formacao)

function amplia_formacao() {
    let formacao = document.getElementById('divisao_formacao')
    formacao.style.scale = '1.20'
    titulo_formacao.style.position = 'relative'
    titulo_formacao.style.bottom = '20px'
}
function desamplia_formacao() {
    let formacao = document.getElementById('divisao_formacao')
    formacao.style.scale = '1'
    titulo_formacao.style.bottom = '0px'
}