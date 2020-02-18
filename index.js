//  const nome = 'Renata';
//  const sexo = 'F';
//  const idade = 45;
//  const contribuicao = 29 ;
//  const aposentadoria = (idade + contribuicao);


//  if(contribuicao >= 30 && sexo === 'F' || aposentadoria >= 85 && sexo === 'F') {
//    console.log(`${nome}, você pode se aposentar!`)
//  }

//  else if(contribuicao >= 35 && sexo === 'M' || aposentadoria >= 95 && sexo === 'M') {

//       console.log(`${nome}, você pode se aposentar!`)
//    } else {
//  console.log(`${nome}, você ainda não pode se aposentar!`)
//  }

// *=============================================================================================================== */
//  const alunosDaTurmaA = [
//    {
//      nome:'Rodrigo',
//      nota: 8
//    },
//    {
//      nome:'Renata',
//      nota: 10
//    },
//    {
//      nome:'Jonata',
//      nota: 5.5
//    }
// ]

//  const alunosDaTurmaB = [
//    {
//       nome:'Sara',
//       nota: 4.8
//    },
//    {
//       nome:'Pablo',
//       nota: 5
//    },
//    {
//       nome:'Jonata',
//       nota: 3.5
//    }
//  ]


//  function calculaMedia(alunos){
//    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 
//  }
 
// const media1 = calculaMedia(alunosDaTurmaA)
// const media2 = calculaMedia(alunosDaTurmaB)

// function enviamensagem(media, turma) {
// Se a média da turma for maior que 5, parabenizar a turma.
// if(media > 5){
//   console.log(`A média da ${turma} foi ${media}, parabens!`)
// } else {
//   console.log(`A ${turma} ficou abaixo da média, ${media}.`)
// }
// }


// enviamensagem(media1, 'turmaA')
// enviamensagem(media2, 'turmaB')

// *=========================================================================================================================*/

// const alunosDaTurmaA = [
//   {
//      nome:'Rodrigo',
//      nota: 8
//   },
//   {
//      nome:'Renata',
//      nota: 10
//   },
//   {
//      nome:'Jonata',
//      nota: 5
//   },
//   {
//      nome:'Luna',
//      nota:2
//   }
// ]

// const alunosDaTurmaB = [
//   {
//      nome:'Sara',
//       nota: 4.8
//    },
//    {
//       nome:'Pablo',
//       nota: 5
//    },
//    {
//       nome:'Jonata',
//       nota: 3.5
//    },
//   {
//       nome: 'Mia',
//       nota: 5
//    },
//    {
//       nome:'Sandra',
//       nota: 9
//    }
// ]

// function calculaMedia(alunos){
//   let soma = 0;
//   for (let i = 0; i < alunos.length; i++) {
//       soma = soma + alunos[i].nota
//    } 
//    const media = soma / alunos.length
//     return media 
// }

// const media1 = calculaMedia(alunosDaTurmaA)
// const media2 = calculaMedia(alunosDaTurmaB)

// function enviamensagem(media, turma) {
// Se a média da turma for maior que 5, parabenizar a turma.
// if(media > 5){
//   console.log(`A média da ${turma} foi ${media}, parabens!`)
// } else {
//  console.log(`A ${turma} ficou abaixo da média, ${media}.`)
// }
// }
// enviamensagem(media1, 'turmaA')
// enviamensagem(media2, 'turmaB')
// *=======================================================================================================/*


//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:
//const usuarios = [
//  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
//];

const usuario = [
  {
    nome:'Jonata',
    tecnologia: ['HTML', 'CSS']
  },
  {
    nome: 'Sara',
    tecnologia: ['JavaScript', 'CSS']
  },
  {
    nome:'Pablo',
    tecnologia: ['HTML', 'Node.js']
  }
]

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

function candidatos() {

  for(i=0; i<=2; i++){   
    var frase = `${usuario[i].nome} trabalha com ${usuario[i].tecnologia[0] +
       " e com " + usuario[i].tecnologia[1]}`
      console.log(frase)
    
  }

  //  for(i=0;i<=2;i++){
//  }
 }

 candidatos();




