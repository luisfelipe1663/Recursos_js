const numeros= [1,2,3,4,5,6,7,8,9,10];
//array = 0,1,2,3,4,5,6,7,8,9(posições)

//metodo:forEach
//percorre o array trazendo o valor e o indice
numeros.forEach((valor, indice) => {

    console.log("na posição:", indice, "esta o valor", valor);
});

//método filter()
// Permite criar uma nova lista sem modificar a original (dentro de uma constante).
const numerosPares = numeros.filter((numero)=> {
    return numero % 2 === 0;// condição verdadeira

});
const numerosImpar = numeros.filter((numeros)=>{
    return numeros % 2 !=0 //condição verdadeira
});

console.log("Todos os numeros: ", numeros);
console.log("Todos os pares: ", numerosPares);
console.log("Todos os Impares: ", numerosImpar);

//método MAP
//Permite manipular os dados , armazenando em um novo array sem modificar o array original

const numerosDobro = numeros.map((numero)=>{

    return numero*2

});

console.log("Valores dobrados:", numerosDobro);
