// importar o express e nunjucks
const express = require('express');
const nunjucks = require('nunjucks');

// criar o servidor
const server = express();
const assetsData = require('./data/assets');
const wrapperData = require('./data/wrapper');
const recipesData = require('./data/recipes');

//Configurar servidor para usar arquivos da pasta public
server.use(express.static('public'));

// inicializar e configurar template engine
server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

// rotas
server.get('/', (req, res) => {
  const assets = assetsData;  
  const wrapper = wrapperData;
  const recipes = recipesData;

  return res.render('index', { assets, wrapper, recipes });
});

server.get('/about', (req, res) => {
  const assets = assetsData;  
  const wrapper = wrapperData;

  return res.render('about', { assets, wrapper });
});

server.get('/recipes', (req, res) => {
  const assets = assetsData;  
  const wrapper = wrapperData;
  const recipes = recipesData;

  return res.render('recipes', { assets, wrapper, recipes });
});

server.get('/recipes/:index', (req, res) => {
  const assets = assetsData;  
  const recipes = recipesData;
  const recipeIndex = req.params.index;
  
  return res.render('recipes', {assets, recipe: recipes[recipeIndex] });
});

// configurando porta do servidor
server.listen(3000, () => {
  console.log('🚀 Server is running on port 3000');
});