 const pessoa = {
    nome:"Luis",
    idade: 17,
    pets:["Bolinha"],
    nacionalidade:"Bradileiro"
 };
 //a estrutura FOR IN nos permite percorrer o objeto, dessa forma, retornará todas as chaves do objeto, sendo: nome, idade, pets, nacionalidade.
 for(const chave in pessoa){
    console.log("Chave:", chave)
 };
 //acessando chaves e valores do objeto:
 for(const chave in pessoa ){
    console.log("Chave:", chave);
    console.log("Valor:", pessoa[chave]);
 };
 //MÉTODOS PARA OBJETOS 

 //obtendo todas as chaves do objeto 
 const chaves = Object.keys(pessoa);

//obtendo todos os valores do objeto 
 const valores = Object.values(pessoa);
 //obtendo pares de chaves e valor do objeto
 const entradas = Object.entries(pessoa);



 console.log("Chaves:", chaves);
 console.log("valores:", valores);
console.log("Entradas (chaves/valor):", entradas);