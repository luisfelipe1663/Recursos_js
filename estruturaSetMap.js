//UM set é uma estrutura de dados qie guarda valores únicos
let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(2); // Não sera adicionado

console.log(numeros)

// Quando udar um set?
//Quando desejar remover a duplicidade em um array
//Quando desejar uma verificação rápida de valores existentes

let arrayComDuplicidade = [1,2,3,4,4,5,];
let arraySemDuplicidade = [...new Set(arrayComDuplicidade)];
console.log("Array com duplicidade:", arrayComDuplicidade);
console.log("Array sem duplicidade usando set:",arraySemDuplicidade);

//estrutura MAP
//Armazena informações associadas a chaves especificas mantendo a ordem de inserção de informações.

let mapa = new Map();

//(chave, valor)
mapa.set('nome','Fernanda');
mapa.set('idade',26);

console.log(mapa.get('nome'));
console.log(mapa.get('idade'));

//Usando diferentes tipos de chaves (função, objeto)
let chaveFuncao = function(){};
let chaveObjeto = {};

let mapaVariado = new Map();

mapaVariado.set(chaveFuncao, 'valor da função');
mapaVariado.set(chaveObjeto, 'valor do objeto')
console.log(mapaVariado.get(chaveFuncao));
console.log(mapaVariado.get(chaveObjeto));

// Diferença entre ARRAY, set e Map:
//Array:armazena varios valores podendo ter dublicidade de informação.
//set: verifica os valores, Guardando valores unicos, evitando dublicidade.
//map:Armazena pares de informações com chave e valor(informações específicas).