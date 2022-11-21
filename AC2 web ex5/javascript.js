

//Exercicos 1
/*Crie duas variáveis com o valor 10 e 100. Mostre o valor da soma, subtração, divisão e multiplicação em um ALERT.*/
var num10 = 10;
var num100 = 100;

alert(`
    Soma: ${num10 + num100}
    Subtração: ${num100 - num10}
    Multiplicação: ${num10 * num100}
    Divisão: ${num100 / num100}
`)
//Exercicio 2
/*Crie um loop que mostre na tela o valor de 10 a 100.*/

for (let i = 10; i <= 100; i++) {
    console.log('10 a 100: ' + i);
}

//Exercicios 3
/*Crie uma variável que recebe o valor fixo 5. Mostre a tabuada desse número.*/
const fixo = 5;
var tabuada = '';
for (let i = 1; i <= 10; i++) {
    /*         'Nome: ' + i;
            `NOme ${i}`; */

    tabuada += `${fixo} x ${i} = ${fixo * i}` + '\n';
}
console.log(tabuada);

//Exercicio 4 
/*Adapte o exercício anterior para o valor não ser mais fixo. O valor deve ser recebido de um campo da tela.*/
function taBuada() {
    var calc = parseInt(document.getElementById('TabuTxt').value);
    var c = "";

    if (calc > 0) {
        for (let i = 1; i <= 10; i++) {
            c += `${calc} x ${i} = ${calc * i}` + '\n';
            /* 4 x 1 = 4 |
               4 x 2 = 8 |
               4 x 3 = 12 */
        }
        return document.getElementById('resultadoTabuada').value = c;
    }
}
// Exercicio 5
/* Fazer um calculadora que receberá dois valores e a operação (+,-,*,/). Ao clicar no botão calcular o resultado é demonstrado. */
var a;
var b;

function adicao(){
    a = parseFloat(document.getElementById('valor1').value);
    b = parseFloat(document.getElementById('valor2').value);
    return document.getElementById('calcResultado').value = a + b;
}
function subtracao(){
    a = parseFloat(document.getElementById('valor1').value);
    b = parseFloat(document.getElementById('valor2').value);
    return document.getElementById('calcResultado').value = a - b;
}
function multiplicacao(){
    a = parseFloat(document.getElementById('valor1').value);
    b = parseFloat(document.getElementById('valor2').value);
    return document.getElementById('calcResultado').value = a * b;
}
function divisao(){
    a = parseFloat(document.getElementById('valor1').value);
    b = parseFloat(document.getElementById('valor2').value);
    return document.getElementById('calcResultado').value = a / b;
}

//Exercico 6 
/* Percorra o array [1,2,3,4,5,6,7,8,9,10] e exiba apenas os valores pares. */

var numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(numeros.filter((get) => get % 2 == 0));

//Ecercicio7
/* O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:
custo final = custo de fábrica + (custo de fábrica * percentual do distribuidor) + (custo de fábrica * percentual de impostos)

O usuário terá uma tela para entrar com os valores:

custo de fábrica => nome do input custoFabrica
% distribuidor => nome do input percDistribuidor
% impostos => nome do input percImpostos
Valor final => nome do input valorfinal
Deverá executar o cálculo e demonstrar o resultado no “valorfinal” quando clicar no botão “btncalcular”. */


function btnCalcular() {
    const custoFab = parseFloat(document.getElementById("custoFab").value);
    const final = custoFab +
        (custoFab * parseFloat(document.getElementById("percDist").value)) +
        (custoFab * parseFloat(document.getElementById("percImp").value));

    return document.getElementById("valorFinal").value = final;
}

