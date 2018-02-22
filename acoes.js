/*function submeterCalculo(val1, val2) {
    window.location = '/calc' + val1 + '/' + val2;
}*/

var valor1 = null;
var valor2 = '2';
var operacao = null;
var resultado = null;
var final = null;


	function TecladoClick(input) {
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

function limpar() {
	document.getElementById('valor').value= " ";
}
    



/*function igual(input = '=') {

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

}*/ 