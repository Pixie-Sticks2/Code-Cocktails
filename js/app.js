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

createDrinks();


// Jesse
//----------------Prototype Method---------------------//
RecipeCard.prototype.renderRecipeCard = function(titlePosition, descriptionPosition, ingredientsPosition, drinkpicPosition, directionsPosition, authorPosition) {
  titlePosition.textContent = this.title;
  descriptionPosition.textContent = this.description;
  ingredientsPosition.textContent = this.ingredients;
  drinkpicPosition.src = this.drinkpic;
  directionsPosition.textContent = this.ingredients;
  authorPosition.textContent = this.author;
}
function renderCard() {
  const recipeCardArticle = document.createElement("id to bartender div?");
  articleElem.appendChild(recipeCardArticle);
  const recipeTitle = document.createElement("h2 title", this.title);
  articleElem.appendChild(recipeTitle);
  const recipeDescription = document.createElement("h3", this.description);
  articleElem.appendChild(recipeDescription);
  const recipeLiquor = document.createElement("p", this.liquorType);
  articleElem.appendChild(recipeLiquor);
}
new Drink("Alabama Booty Shaker", "This delicious concoction is guaranteed to get the wedding on the dance floor!", "Tequila", [Lowered Expectations, Lively music], "Summer", "Wedding", "../images/Tiki Drink.png", "Shake it, stir it, and pour it down your gullet!", "Author - Jesse D");
new Drink("Aretha Franklin", "Nothing like a big woman to keep you warm at a winter wonderland wedding!", "Tequila", "Can-do Attitude, A Whole Lot Of Love", "Autumnn", "Wedding", "../images/Layered Color Drink.png", "Squeeze it, strain it, and hold on for dear life!", "Author - Jesse D");
new Drink("Backcountry Sour Smash", "This potent drink is a not-so-subtle blend of pine, body odor, and granola", "Vodka", "Exhaustion, Unfiltered Water", "Summer", "Holiday", "../images/Lime Drink.png", "Shrug it off, dust it off, and serve it in your hiking boot!", "Author - Jesse D");
new Drink("Politically Incorrect", "Show your peers that you're the old white man that nobody wants to listen to anymore!", "Whiskey", "Intolerance, Blatant Disregard", "Autumn", "Holiday", "../images/examplePic.png", "Stonewall it, pass it in the middle of the night, and take it from a non-profit fund!");
new Drink("No 'Regerts'", "This sneaky little cocktail might force you to delete your social media accounts!", "Vodka", "Poor Life Choices, Peer Pressure", "Autumn", "Night-Out", "../images/examplePic.png", "Carry on with reckless abandon, throw in a misspelled tattoo, and serve it on a stranger's bellybutton.");
new Drink("Covid Shots", "This cocktail is 97% effective in inebriating the general population", "Tequila", "Extra Tequila, Social Distancing", "Winter", "Holiday", "../images/examplePic.png", "Serve in a needless syringe, and chase it with a second dose!", "Author - Jesse D");
new Drink("Bomb Pop", "A modernized twist on the original red, white, and blue popsicle", "Non-Alcoholic Mixer", "Fruit Punch, Artificial Food Coloring", "Summer", "Holiday", "../images/examplePic.png", "Blend each colored punch with coloring and ice, then layer each colored slush mix into glass and serve!", "Author - Jesse D");