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

server.get('/recipes/:index', function (req, res) {
  const assets = assetsData;  
  const wrapper = wrapperData;
  const recipes = recipesData;

  const recipeIndex = req.params.index;

  for (const iterator of recipes) {
    if (iterator === recipeIndex) {
      recipeIndex = iterator;
    }
  }
  console.log(recipeIndex);

  return res.render(
    'recipes', 
    { 
      assets, 
      wrapper, 
      item: recipes[recipeIndex] 
    });
});

server.listen(3000, function () {
  console.log('🚀 Server is running on port 3000');
});