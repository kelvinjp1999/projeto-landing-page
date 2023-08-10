var setaDireita=document.getElementById('seta-direita')
var setaEsquerda=document.getElementById('seta-esquerda')
var leonardo=document.getElementById('leonardo')
var samantha=document.getElementById('samantha')
var bruna=document.getElementById('bruna')

function RolarParaDireita(){
    leonardo.style='display:none'
    bruna.style='display:flex'
    setaEsquerda.style='display:flex;margin-top:112px'
    setaDireita.style='display:none'
}

function RolarParaEsquerda(){
    leonardo.style='display:flex'
    bruna.style='display:none'
    setaEsquerda.style='display:none'
    setaDireita.style='display:flex'
}