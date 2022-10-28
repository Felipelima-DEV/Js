alert('Ola,bom dia')
function contar (){
var ini = window.document.getElementById('txt1')
var fim = window.document.getElementById('txtf')
var passo = window.document.getElementById('txtp')
var res = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0  ){res.innerHTML = ( ' impossivel contar, preencha todos os dados ')}
    else {res.innerHTML = ('contando')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
        if (p <= 0){p = 1}
        //contagem progresiva
        if (i < f){ for (let c = i; c <= f; c += p){
        res.innerHTML += (`${c} \u{1f970} `) }
        }
        //contagem regresiva
        else { for (let c = i; c >= f; c -= p)
        { res.innerHTML += (`${c} \u{1f970} `)}
        }
    res.innerHTML += (` \u{1f51a} `)}
}
