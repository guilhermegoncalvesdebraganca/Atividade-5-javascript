//Questão1
/*var nome, dia, mes
nome=prompt("Escreva seu nome.");
dia=prompt("Fale um dia.");
mes=prompt("Fale um mês");

if (nome=="Celso Portiolli" && dia=="11" && mes=="9") {
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro");
}
else if(nome=="Guilherme" && dia=="04" && mes=="07"){
    window.alert("Faça a prova com atenção");
}
    */
    
    
//Questão2
/*var nota1, nota2, nota3, media
nota1=parseFloat(prompt("Digite sua primeira nota."));
nota2=parseFloat(prompt("Digite sua segunda nota."));
nota3=parseFloat(prompt("Digite sua terceira nota."));
media=((nota1+nota2+nota3)/3);
if (media>=60) {
    window.alert("Sua media é de" + media + ". Você foi aprovado.");
}
else if (media<60) {
    window.alert("Sua media é de" + media + ". Você foi reprovado.");
}
    */
    

//Questão3
function calcularPesos() {
    var pesoTt = 0;
    var contador = 0;
    var pesoMinimo = Infinity;
    var pesoMaximo = -Infinity;

    while (true) {
        var pesoGado = parseFloat(prompt("Informe o peso do gado, ou escreva 0 para sair"));

        if (pesoGado === 0) {
            break;
        }

        pesoTt += pesoGado;
        contador++;

        if (pesoGado < pesoMinimo) {
            pesoMinimo = pesoGado;
        }

        if (pesoGado > pesoMaximo) {
            pesoMaximo = pesoGado;
        }
    }

    if (contador > 0) {
        var mediaPeso = pesoTt / contador;
        window.alert("Peso menor:"+ pesoMinimo + " Peso maior:" + pesoMaximo + " Media do peso" + mediaPeso);
    } else {
        window.alert("Nenhum peso foi informado.");
    }
}

calcularPesos();

//Questão4
/*var num1, num2, resul
num1=prompt("Digite o primeiro número");
num2=prompt("Digite o segundo número");
resul=(num1**num2)
window.alert("O resultado é " + resul);
*/


