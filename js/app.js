'use strict';

// Global Variables
const liquorFormElem = document.getElementById('liquorForm');
Drink.prototype.allDrinksArray = [];
let currentDrink = '';

// Constructor Functions

function Drink(name, description, liquorType, recipe, season, occasion, image, directions, bartender) {
  this.name = name;
  this.description = description;
  this.recipe = recipe;
  this.liquorType = liquorType;
  this.season = season;
  this.occasion = occasion;
  this.image = image;
  this.directions = directions;
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
  new Drink("Backcountry Sour Smash", "This potent drink is a not-so-subtle blend of pine, body odor, and granola", "Vodka", ["Exhaustion", "Unfiltered Water"], "Summer", "Holiday", "../images/Lime Drink.png", "Shrug it off, dust it off, and serve it in your hiking boot!", "Author - Jesse D");
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Summer', 'Night-Out', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Autumn', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Autumn', 'Holiday', 'Image', 'Bartender');
  new Drink("No 'Regerts'", "This sneaky little cocktail might force you to delete your social media accounts!", "Vodka", ["Poor Life Choices", "Peer Pressure"], "Autumn", "Night-Out", "../images/examplePic.png", "Carry on with reckless abandon, throw in a misspelled tattoo, and serve it on a stranger's bellybutton.");
  new Drink("Reindeer RAM", "Boost memories of your big day with this elegant peppermint martini!", "Vodka", ["Vodka", "Candy Canes", "Marshmallow Creme"], "Winter", "Wedding", "../images/reindeer.png", "Crush peppermint, swirl, and serve.", "Author - Jessica P.");;
  new Drink('Name', 'Description', 'Recipe', 'Vodka', 'Winter', 'Holiday', 'Image', 'Bartender');
  new Drink('HTML Button', 'A classic White Russian cocktail.', 'Vodka', ['Vodka', 'Coffee Liqueur', 'Cream or Milk'], 'Winter', 'Night-Out', './images/Layered Color Drink.png', 'Add 2 parts Vodka, 1 part coffee liqueur, and 1 part cream.', 'Author - Matt C.');  new Drink("Alabama Booty Shaker", "This delicious concoction is guaranteed to get the wedding on the dance floor!", "Tequila", ["Lowered Expectations", "Lively music"], "Summer", "Wedding", "../images/Tiki Drink.png", "Shake it, stir it, and pour it down your gullet!", "Author - Jesse D");
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Summer', 'Holiday', 'Image', 'Bartender');
  new Drink('GuavaScript', 'If (let feeling === good) {getThisDrink();}', 'Tequila', ['Guava Nectar', 'Tequila', 'Lime', 'Mint'], 'Summer', "Night-Out", './images/Lime Drink.png', 'Mix Lime Juice, Tequila, and Guava Nectar in 1:2:6 ratio. Garnish with mint and lime slice.', 'Author - Matt C.');
  new Drink("Aretha Franklin", "Nothing like a big woman to keep you warm at a winter wonderland wedding!", "Tequila", ["Can-do Attitude", "A Whole Lot Of Love"], "Autumnn", "Wedding", "../images/Layered Color Drink.png", "Squeeze it, strain it, and hold on for dear life!", "Author - Jesse D");
  new Drink('Name', 'Description', 'Recipe', 'Tequila', 'Autumn', 'Holiday', 'Image', 'Bartender');
  new Drink("Python Paloma", "Enjoying this delicious treat is fun in any language!", "Tequila", ["Tequila", "Pink Grapefruit", "Lime Juice", "Coarse Salt"], "Autumn", "Night Out", "../images/python.png", "Press grapefruit, squeeze lime, and mix well.", "Author - Jessica P.");
  new Drink('Tequila and Invoke', 'Invoke this drink to render a good time.', 'Tequila', ['Tequila', 'Coke', 'Lime'], 'Winter', 'Wedding', './images/Lime Drink.png', 'Mix 1 part tequila and 2 parts coke and add a slice of lime.', 'Author - Matt C.');
  new Drink("Covid Shots", "This cocktail is 97% effective in inebriating the general population", "Tequila", ["Extra Tequila", "Social Distancing"], "Winter", "Holiday", "../images/examplePic.png", "Serve in a needless syringe, and chase it with a second dose!", "Author - Jesse D");
  new Drink("Snowy Syntax Smash", "Baby, it's cold outside! Snuggle up with this smooth and crisp drink.", "Tequila", ["Tequila", "Pomegranate", "Honey", "Fresh Ginger"], "Winter", "Night Out", "Chill and serve cold for maximum snuggle-ability.", "../images/smash.png", "Author - Jessica P.");
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Summer', 'Wedding', 'Image', 'Bartender');
  new Drink('Whiskey Partner Power Hour', 'Perfect for a nice Friday afternoon listening to cool people talk about their experiences in coding.', 'Whiskey', ['Whiskey', 'Lemon Juice', 'Simple Syrup', 'Maraschino Cherry (Optional)'], 'Summer', 'Holiday', 'Mix, shake, serve.', 'Author - Matt C.');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Summer', 'Night-Out', 'Image', 'Bartender');
  new Drink("Chocolate Constructor", "Once you've made one, you've made them all!", "Whiskey", ["Whiskey", "Chocolate Bitters", "Orange"], "Autumn", "Wedding", "../images/chocolate.png", "Cozy up, pour up, and bottom's up!", "Author - Jessica P.");
  new Drink("Politically Incorrect", "Show your peers that you're the old white man that nobody wants to listen to anymore", "Whiskey", ["Intolerance", "Blatant Disregard"], "Autumn", "Holiday", "../images/examplePic.png", "Stonewall it, pass it in the middle of the night, and take it from a non-profit fund!");
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Autumn', 'Night-Out', 'Image', 'Bartender');
  new Drink('Memory Leak', 'When your in-laws are causing a scene and you\'d rather just forget the whole night.', 'Whiskey', ['Whiskey', 'Brown Sugar', 'Strong Hot Coffee', 'Irish Whiskey', 'Heavy Cream'], 'Winter', 'Wedding', 'Mix whiskey, sugar, and coffee. Add cream on top. Do not stir.', 'Author - Matt C.');
  new Drink('Name', 'Description', 'Recipe', 'Whiskey', 'Winter', 'Holiday', 'Image', 'Bartender');
  new Drink("Boolean Buttered Beer", "Cold outside? Warm up with this magical spiced drink.", "Whiskey", ["Whiskey", "Agave Nectar", "Unsalted Butter", "Ground Cloves"], "Winter", "Night Out", "../images/boolean.png", "Swish and flick!", "Author - Jessica P.");
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Summer', 'Wedding', 'Image', 'Bartender');
  new Drink("Bomb Pop", "A modernized twist on the original red, white, and blue popsicle", "Non-Alcoholic Mixer", ["Fruit Punch", "Artificial Food Coloring"], "Summer", "Holiday", "../images/examplePic.png", "Blend each colored punch with coloring and ice, then layer each colored slush mix into glass and serve!", "Author - Jesse D");
  new Drink("Method Margarita Mocktail", "The fun is built-in to this tart splash of summer!", "Non-Alcoholic Mixer", ["Limeade", "Simple Syrup", "Club Soda", "Coarse Salt"], "Summer", "Night Out", "../images/method.png", "Mix well, sip, and enjoy.", "Author - Jessica P.");
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Autumn', 'Wedding', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Autumn', 'Holiday', 'Image', 'Bartender');
  new Drink("Smoking Sea SS", "Get spooky with this deep-sea inspired Halloween mocktail.", "Non-Alcoholic Mixer", ["Cranberry Juice", "Apple Cider", "Dry Ice"], "Autumn", "Night Out", "../images/smoking.png", "Shake, stir, and dive in!", "Author - Jessica P.");
  new Drink('Git Pulled Wine', 'A warm drink for a happy occasion.', 'Non-Alcoholic Mixer', ['Grape Juice', 'Orange', 'Star Anise', 'Cinnamon Sticks'], 'Winter', 'Wedding', 'In a large oven, warm a bottle of grape juice with sliced oranges, star anise, and cinnamon sticks.', 'Author - Matt C.')
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Winter', 'Holiday', 'Image', 'Bartender');
  new Drink('Name', 'Description', 'Recipe', 'Non-Alcoholic Mixer', 'Winter', 'Night-Out', 'Image', 'Bartender');
}

createDrinks();


// Jesse
//----------------Prototype Method---------------------//
RecipeCard.prototype.renderRecipeCard = function(namePosition, descriptionPosition, liquorTypePosition, recipePosition, imagePosition, directionsPosition, bartenderPosition) {
  namePosition.textContent = this.name;
  descriptionPosition.textContent = this.description;
  liquorTypePosition.textContent = this.liquorType;
  recipePosition.textContent = this.recipe;
  imagePosition.src = this.image;
  directionsPosition.textContent = this.ingredients;
  bartenderPosition.textContent = this.bartender;
}
function renderCard() {
  const recipeCardArticle = document.createElement("recipe_card",);
  articleElem.appendChild(recipeCardArticle);
  const recipeTitle = document.createElement("h2 title", this.name);
  articleElem.appendChild(recipeTitle);
  const recipeDescription = document.createElement("h3", this.description);
  articleElem.appendChild(recipeDescription);
  const recipeLiquor = document.createElement("p", this.liquorType);
  articleElem.appendChild(recipeLiquor);
}
//--hello world--//