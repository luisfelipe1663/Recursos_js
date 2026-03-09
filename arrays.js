// Arrays me permite colocar vários dados dentro de um único espaço.
const frutas = ['Uva', 'Kiwi', 'Banana', 'Melancia', 'Abacaxi'];
//const frutas = [0,1,2,3,4,];
//exibir a primeira fruta do array
console.log("primeira fruta", frutas[0]);
console.log("ultima fruta", frutas[4]);
//exibindo o total de fruas do array
console.log("Total de fruta", frutas.length);

// o método push serve para adicionar uma nova informação ao array
frutas.push ('Melão');
console.log("Total de frutas, depois do push", frutas.length);
console.log(frutas);

// método para remover as inromações do array: splice
//1º parametro: posição do array.
//2º parametro: quantos itens remover.
//remover abacaxi:
frutas.splice(4,1);
console.log(frutas);

//Percorrer um array
//3 maneiras de percorrer um arra: for, for/of,forEach.

//com laço FOR(para)
for(let i = 0;i<frutas.length;i++){
console.log("indice:",i,"");
console.log(frutas[i]);
};

//usando: forEach(para cada um).
//maneira de percorrer usano indice e valor.
console.log("Percorrendo com o forEach:")
//indice= posição no array
//valor= valor de cada posição
frutas.forEach((valor,indice) => {
console.log("indice",indice,valor);
});
//usando: for/of(para/em).
//armazena a informação dentro de uma variavel ou constante.
for(const fruta of frutas){
    console.log("Fruta da vez:", fruta);
};

