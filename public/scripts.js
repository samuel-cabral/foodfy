const recipes = document.getElementsByTagName(".card");

for (let recipe of recipes) {
  recipe.addEventListener("click", function () {
    window.location.href = `recipes/${recipe}`;
  })
}

console.log(recipeIndex);