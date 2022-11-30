import gifProjet1 from './assets/gifs/projet1.gif'
import imgMorpion from './assets/imgProjetM.png'
import imgDocJS from './assets/imgSiteDocJs.png'
import imgQuizz from './assets/quizz.png'
import imgYoga from './assets/yoga.png'
import imgColor from './assets/randomColor.png'
import imgToDoList from './assets/toDoList.png'
import imgPokemon from './assets/pokemon.png'
import imgImmo from './assets/agenceImmo.png'



const header = {
 
  homepage: 'http://localhost:3000/cleanfolio',
  title: 'Portfolio',
}

const about = {
  
  name: 'Souad Oueslati',
  role: 'Concepteur et Developpeur Full Stack',
  description:
    'Suite à une reconversion professionnelle, je me suis passionnée pour le développement Web. Pour une expertise plus poussée, je suis actuellement une formation dans le language JAVA en tant que concepteur développeur d\'applications. Je serais fin juin opérationnelle et en mesure d\'apporter mes compétences sur des projets porteurs et stimulants utilisant. ',
  resume: 'https://codepen.io/souad__Oueslati',
  social: {
    linkedin: 'https://www.linkedin.com/in/souad-oueslati/',
    github: 'https://github.com/fel31',
  },
}






const projects = [
 
  {
    name: 'Travel Agency',
    srcImage : gifProjet1,
    altImage : 'gif du site one page Travel agency', 
    description:
      'One page , template agence de voyage ',
    stack: ['SASS', 'Javascript'],
    sourceCode: 'https://github.com/fel31/DocumentationJS',
    livePreview: 'https://codepen.io/souad__Oueslati/pen/KKdpLVM',
  },
  {
    name: 'Documentation Js',
    srcImage : imgDocJS,
    altImage : 'image du projet de documentation en javascript',
    description:
      'Site de documentation sur le language de programmation javascript',
    stack: ['CSS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Quizz',
    srcImage : imgQuizz,
    altImage : 'coucou',
    description:
      'Quizz de culture Générale',
    stack: ['SASS', 'Javascript'],
    sourceCode: 'https://github.com/fel31',
    livePreview: 'https://github.com/fel31',
  },
  {
    name: 'OnePage Yoga',
    srcImage : imgYoga,
    altImage : 'image su site de yoga', 
    description:
      'Site de presentation de programmmes yoga',
    stack: ['SASS', 'Javascript'],
    sourceCode: 'https://github.com/fel31/DocumentationJS',
    livePreview: 'https://codepen.io/souad__Oueslati/pen/KKdpLVM',
  },
  {
    name: 'Agence Immo',
    srcImage : imgImmo,
    altImage : 'image du projet de morpion',
    description:
      'site multi-pages d\'une Agence immobiliere ',
    stack: ['CSS', 'CMS WordPress'],
    sourceCode: 'https://github.com/fel31',
    livePreview: 'https://github.com/fel31',
  },
  {
    name: 'Morpion',
    srcImage : imgMorpion,
    altImage : 'image du jeu du morpion',
    description:
      'jeu en ligne morpion',
    stack: ['SASS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Random Color',
    srcImage : imgColor,
    altImage : 'gif du projet 1', 
    description:
      'générateur de couleurs aléatoires',
    stack: ['SASS', 'JavaScript'],
    sourceCode: 'https://github.com/fel31/DocumentationJS',
    livePreview: 'https://codepen.io/souad__Oueslati/pen/KKdpLVM',
  },
  {
    name: 'To-do list',
    srcImage : imgToDoList,
    altImage : 'image du projet To do list',
    description:
      'image de présentation de la todo list',
    stack: ['CSS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Pokemon Speak',
    srcImage : imgPokemon,
    altImage : 'image du jeu de pokemons qui parle',
    description:
      'jeu vocalise pokemon avec le framework vue.js',
    stack: ['SASS', 'Vue.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [

  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'MUI',
  'Axios',
  'SASS',
  'Java',
  'JEE',
  'Spring',
  'JUnit',

]

const contact = {
 
  email: 'oueslati.souad@hotmail.fr',
}

export { header, about, projects, skills, contact }
