var valor1 = null;
var valor2 = '3';
var operacao = null;
var resultado = null;
var final = null;


function tecladoClick(input) {
    var operacoes = '+-/*';
    var inputEl = document.getElementById('valor');

    if (operacoes.indexOf(input) > -1) {
        operacao = input;
        valor1 = inputEl.value;
        inputEl.value = '';
    } else if (input === '=') {
        valor2 = inputEl.value;
    } else {
        inputEl.value += input;
    }
}

function igual(input = '=') {

    switch (operacao){
        case '+':
            resultado = (valor1+valor2);
            alert(resultado);
        break;
        case '-':
            resultado = (valor1-valor2);
            alert(resultado);
        break;
        case '/':
            resultado = (valor1/valor2);
            alert(resultado);
        break;
        case '*':
            resultado = (valor1*valor2);
            alert(resultado);
    }

document.getElementById('valor').innerHTML = 'resultado';


}






/*
var a = null;
var b = null;
var Escolha = null;
var valor;
var operacao;
function clickBotao(valor) {
        if(!a){
            a = valor;
        }
        if(a && !b){
            operacao = valor;
        }
        if(a && operacao){
            b = valor;
        }
    }
    var valorConvertido = parseInt(b)
function resultado(Escolha){
    if (operacao === "SOMA"){
        var final = a+b;
    } 
        else {
            if (operacao === 'SUBTRAI'){
                var final = a-b;
            }
            else{
                if (operacao === 'DIVIDIR'){
                    var final = a/b;
                }
                else{
                    if (operacao === 'MULTIPLICAR'){
                        var final = a*b;
                    }
                        else{
                        var final = 'Erro escolha uma opção correta'
                        }
                    }
                }
            }
            return(final);
        }
    
*/