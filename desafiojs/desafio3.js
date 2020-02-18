//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:
//const usuarios = [
//  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
//];

const funcionario = [
    {
        nome: 'Renata',
        tecnologia: ['HTML', 'CSS']
    },
    {
        nome:'Rodrigo',
        tecnologia: ['JavaScript', 'CSS']
    },
    {
        nome:'Jonata',
        tecnologia: ['HTML', 'Node.js']
    }
]

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

function informacaoDoUsuario(funcionario){
            return (funcionario[0].nome, funcionario[1].nome, funcionario[2].nome)
}

const informacao = informacaoDoUsuario(funcionario)

//Carlos trabalha com HTML, CSS
//Jarmine trabalha com JavaScript, CSS
//Tuane trabalha com HTML, Node.js