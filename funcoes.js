//Função é declarada com: palavra reservada "function" + nome da funçã0();
//Os parenteses guardarão o parãmetro.
function saudacao (nome){
 console.log("Ola, ", nome);
};

saudacao("Gaby");
saudacao("Pedro");
saudacao("Helo");
saudacao("Gabriel");
saudacao("Yasmim");
saudacao("Lucas");
saudacao("Luis");

// Quando uma função  retornar um valor, usar a palavra reservada "return".
function calcDobro(numero){
return numero*2;
};
//Armazena a função cpm parãmetro dentro de uma constante ou variável.
const numeroDobro = calcDobro(30);
console.log("O dobro de 30, é: ", numeroDobro);

//ARROW FUNCTION
const saud = (nome) =>{
console.log("Oi, ", nome);
};
saud("Fernanda");

const dobro = (num) =>{
    return num*2;
};
 const numdobrado = dobro(7);
 console.log("O dobro de 7 é: ", numdobrado);

 //FUNÇÃO SIMPLIFICADA
//const + nome da função + parametro + ação.
 const saudacao2 = nome => console.log("Oii,", nome);
 saudacao2("Luana");

 const dobro2 = numero => numero*2;
 const numdobro2 = dobro(13);
 console.log("O dobro de 13 é:" , numdobro2);