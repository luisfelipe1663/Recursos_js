// Criando objetos em JS

const pessoa = {
    nome:"Maicon",
    idade: 34,
    profissão: "cantor"
};
//adicionando nova propriedade no objeto pessoa
pessoa.sobrenome = "Jackson";
//exibindo propriedades do objeto 
console.log("Nome: ", pessoa.nome);
console.log("Sobrenome: ", pessoa.sobrenome);

const livro = {
    
    titulo:"O Pequeno Principe",
    paginas: 300
};
// Adicionando novas propriedades ao objeto livro 
livro.publicado = true; // propriedade do tipo boolean
livro.idiomas = [
      "Portugues", "Ingles", "Espanhou"
];// propriedade com Array 

// Adicionando informações ao Array idiomas, presente no objeto livro.
livro.idiomas.push("Mandarim");
livro.idiomas.push("Francês");

console.log("Livro", livro);
//deletando propriedades paginas, do objeto livro 
delete livro.paginas;

console.log("Livro depois de remover as paginas:", livro);

const autor ={
    nome:"Antoine de Saint-Exupery",
    nacinalidade: "Francês",
    idade: 72
};

console.log("Autor:", autor);
//console.log("autor:", autor);
//adicionando o objeto autor inteiro para propriedade do objeto livro
livro.autor = autor;

console.log(livro);
//exibindo o objeto autor,atraves do objeto livro
console.log("autor do livro:",livro["autor"]);