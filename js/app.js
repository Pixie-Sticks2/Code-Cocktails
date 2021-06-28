'use strict';

// Global Variables
const liquorFormElem = document.getElementById('liquorForm');
Drink.prototype.allDrinksArray = [];
let currentDrink = '';

// Constructor Functions

function Drink(name, description, recipe, liquorType, season, occasion, image, bartender) {
  this.name = name;
  this.description = description;
  this.recipe = recipe;
  this.liquorType = liquorType;
  this.season = season;
  this.occasion = occasion;
  this.image = image;
  this.bartender = bartender;
  this.allDrinksArray.push(this);
}

// Global Functions
function handleSubmit(event) {
  event.preventDefault();
  let liquorOption = event.target.liquor.value;
  let seasonOption = event.target.season.value;
  let occasionOption = event.target.occasion.value;
  console.log(liquorOption);
  console.log(seasonOption);
  console.log(occasionOption);
  for (let i = 0; i < Drink.prototype.allDrinksArray.length; i++) {
    if (liquorOption == Drink.prototype.allDrinksArray[i].liquorType && seasonOption == Drink.prototype.allDrinksArray[i].season && occasionOption == Drink.prototype.allDrinksArray[i].occasion) {
      currentDrink = Drink.prototype.allDrinksArray[i];
      console.log(currentDrink);
    }
  }
  // render recipe card

}

// Event Listener
liquorFormElem.addEventListener('submit', handleSubmit);


new Drink('White Russian', 'Vodka', 'Summer', 'Wedding');
new Drink('test', 'Whiskey', 'Winter', 'Holiday');


//Robert

function createDrinks() {
  new Drink('Huckleberry Sin', 'Description', 'Recipe', 'Vodka', 'Summer', 'Wedding', 'Image', 'Robert');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Summer', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Summer', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Autumn', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Autumn', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Autumn', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Winter', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Winter', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Winter', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Summer', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Summer', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Summer', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Autumn', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Autumn', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Autumn', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Winter', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Winter', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Winter', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Summer', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Summer', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Summer', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Autumn', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Autumn', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Autumn', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Winter', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Winter', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Winter', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Summer', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Summer', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Summer', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Autumn', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Autumn', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Autumn', 'v', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Winter', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Winter', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Winter', 'Night-Out', 'Image', 'Bartender');
}


// Jesse
//--------------------Global Variables--------------------//
RecipeCard.potentialRecipes = [];
//-------------------Constructor Function------------------//
function RecipeCard(title, description, ingredients, drinkpic, directions, author) {
  this.title = title;
  this.description = description;
  this.ingredients = ingredients;
  this.drinkpic = drinkpic;
  this.directions = directions;
  this.author = author;
  RecipeCard.potentialRecipes.push(this);
}
//----------------Prototype Method---------------------//
RecipeCard.prototype.renderRecipeCard = function(titlePosition, descriptionPosition, ingredientsPosition, drinkpicPosition, directionsPosition, authorPosition) {
  titlePosition.textContent = this.title;
  descriptionPosition.textContent = this.description;
  ingredientsPosition.textContent = this.ingredients;
  drinkpicPosition.src = this.drinkpic;
  directionsPosition.textContent = this.ingredients;
  authorPosition.textContent = this.author;
}
new Recipe("Alabama Booty Shaker", "This delicious concoction is guaranteed to get the wedding on the dance floor!", "Tequila, Lowered expectations, Lively music", "../images/Tiki Drink.png", "Shake it, stir it, and pour it down your gullet!", "Author - Jesse D");
new Recipe("Aretha Franklin", "Nothing like a big woman to keep you warm at a winter wonderland wedding!", "Tequila, Can-do attitude, A whole lot of love", "../images/Layered Color Drink.png", "Squeeze it, strain it, and hold on for dear life!", "Author - Jesse D");
new Recipe("Backcountry Sour Smash", "This potent drink is a not-so-subtle blend of pine, body odor, and granola", "Vodka, Exhaustion, Unfiltered Water", "../images/Lime Drink.png", "Shrug it off, dust it off, and serve it in your hiking boot!", "Author - Jesse D");

createDrinks();