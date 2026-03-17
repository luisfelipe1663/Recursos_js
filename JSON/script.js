//Selecionando elementos do HTML com querySelector
const loadDataBtn = document.querySelector("#loadDataBtn");
const listaPessoas = document.querySelector("#listaPessoas");

async function carregarPessoas() {
    try {

        //Faz a requisição dp JSON
        const reponse = await fetch("pessoas.json");

        //Converte a resposta da requisição para objeto JavaScript
        const pessoas = await reponse.json();

        console.log(pessoas);

        pessoas.forEach((pessoa)=>{

            const li = document.createElement("li");

            li.innerHTML =`
            <strong>${pessoa.nome}</strong><br>
            idade:${pessoa.idade}<br>
            Curso:${pessoa.detalhes_estudo.curso}
            `;
            listaPessoas.appendChild(li);

        });


    } catch (error) {
        console.error("Erro ao carregar JSON", error);
    };
};

//Evento para o botão de carregamento de pessoas
loadDataBtn.addEventListener("click",carregarPessoas);


//Outras opções de conversão:
//JSON para OBJETO
//const jsoString = '{"nome:" "joão","idade:" 49}'

//Constante cmo JSON convertido em objeto
//const objeto = JSON.parse(jsonString)

//OBJETO PARA JSON
//Trasformando objeto em JSON
//const objeto_JSON = JSON.stringfy(objeto);