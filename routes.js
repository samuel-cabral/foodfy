const express = require('express');
const routes = express.Router();

const assetsData = require('./data/assets');
const wrapperData = require('./data/wrapper');
const recipesData = require('./data');

routes.get('/', (req, res) => {
  const assets = assetsData;  
  const wrapper = wrapperData;
  const recipes = recipesData;

  return res.render('index', { assets, wrapper, items: recipes });
});

routes.get('/about', (req, res) => {
  const assets = assetsData;  
  const wrapper = wrapperData;

  return res.render('about', { assets, wrapper });
});

routes.get('/recipes', (req, res) => {
  const assets = assetsData;  
  const wrapper = wrapperData;
  const recipes = recipesData;

  return res.render('recipes', { assets, wrapper, items: recipes });
});

routes.get('/recipes/:index', (req, res) => {
  const assets = assetsData;  
  const recipes = recipesData;
  const recipeIndex = req.params.index;
  
  return res.render('recipe', {assets, item: recipes[recipeIndex-1] });
});

module.exports = routes;