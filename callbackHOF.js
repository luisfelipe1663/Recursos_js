// H = Higher
// O = Order
// F = Function
// Função de Alta ordem
// Função que recebe outras funções como parãmetro e argumento

function calcular(numero1, numero2, operacao){
   return operacao(numero1, numero2);
};

function soma(num1, num2){
    return num1+num2;
};

function subtrair (num1, num2){
    return num1-num2;
};
//chamada da função de alta ordem
const resultadoSoma = calcular(10, 8, soma);
console.log("A soma dos dois valores é:", resultadoSoma);

const resultadoSubtrair = calcular(25, 15, subtrair );
console.log("A subitração dos dois numeros é:", resultadoSubtrair)