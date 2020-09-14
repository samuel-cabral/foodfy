const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const assetsData = require('./data/assets');
const wrapperData = require('./data/wrapper');
const recipesData = require('./data/recipes');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', (req, res) => {
  const assets = assetsData;
  const wrappers = wrapperData;
  const recipes = recipesData;

  return res.render('index', { assets, wrappers, recipes });
});

server.get('/about', (req, res) => {
  const assets = assetsData;
  const wrappers = wrapperData;

  return res.render('about', { assets, wrappers });
});

server.get('/recipes', (req, res) => {
  const assets = assetsData;
  const wrappers = wrapperData;
  const recipes = recipesData;

  return res.render('recipes', { assets, wrappers, recipes });
});

server.get('/layout', (req, res) => {
  return res.render('layout');
});

server.get('/recipes/:index', function (req, res) {
  const recipeIndex = req.params.index;

  const assets = assetsData;
  const wrappers = wrapperData;
  const recipes = recipesData;

  const recipe = recipes.find(function(recipe) {
    return recipe.index == recipeIndex;
  })
  
  console.log(recipes[recipeIndex]);
  
  return res.render('recipe', { assets, wrappers, recipe });
})

server.listen(5000, function() {
  console.log('🚀 Server is running on port 5000');
});