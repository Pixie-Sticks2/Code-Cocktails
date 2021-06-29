'use strict';

// Global Variables
const liquorFormElem = document.getElementById('liquorForm');
Drink.prototype.allDrinksArray = [];
let currentDrink = '';
let drink;

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

//user selects Randomize Drink option
function randomDrink () {
  let randomNum = Math.floor(Math.random() * Drink.prototype.allDrinksArray.length) + 1;
  console.log(randomNum);
  drink = Drink.prototype.allDrinksArray[randomNum];
}


// Event Listener
liquorFormElem.addEventListener('submit', handleSubmit);

//Robert

function createDrinks() {
  new Drink("Alabama Booty Shaker", "This delicious concoction is guaranteed to get the wedding on the dance floor!", "Tequila", ["Tequila", "Lowered Expectations", "Lively music"], "Summer", "Wedding", "../images/Tiki Drink.png", "Shake it, stir it, and pour it down your gullet!", "Author - Jesse D");
  
  new Drink('Huckleberry Sin', 'Enjoy the sunset with this excoriating critique of slavery - but make sure to stay alert for riverbank beverage bandits!', 'Vodka', ['5 Fresh Blueberries', '2 oz Huckleberry Flavored Vodka', '12 oz Club Soda'], 'Summer', 'Wedding', 'Image', 'Muddle the blueberries in the bottom of a mason jar. Add ice and pour in the vodka, filling to the top with club soda.', 'Author - Robert Z');
  
  new Drink("Backcountry Sour Smash", "This potent drink is a not-so-subtle blend of pine, body odor, and granola", "Vodka", ["Exhaustion", "Unfiltered Water"], "Summer", "Holiday", "../images/Lime Drink.png", "Shrug it off, dust it off, and serve it in your hiking boot!", "Author - Jesse D");
    
  new Drink('Gulp-iver\'s Travels', 'A drink worth setting sail for. The Brobdingnagians would agree!', 'Vodka', ['1/2 oz Vodka', '1/2 oz Peach Schnapps', '1/2 oz Grapefruit Juice', '1/2 oz Cranberry Juice'], 'Autumn', 'Wedding', 'Image', 'Shake the ingredients with ice and strain into an empty rocks glass. This goes down in a single swig.', 'Author - Robert Z');

  new Drink("Drunken Spice Latte", "This Russian liquor takes an adult twist on every basic white girl's coffee of choice!", "Vodka", ["Tiny Pumpkins","Instagram Captions","Latte Foam Art"], "Autumn", "Night-Out", "Image", "Listen to Bo Burnam's 'White Woman's Instagram' song and add whatever you want from that. Top it all off with vodka.", "Author - Anvay B");
    
  new Drink("No 'Regerts'", "This sneaky little cocktail might force you to delete your social media accounts!", "Vodka", ["Poor Life Choices", "Peer Pressure"], "Autumn", "Night-Out", "../images/examplePic.png", "Carry on with reckless abandon, throw in a misspelled tattoo, and serve it on a stranger's bellybutton.", "Author - Jesse D");
  
  new Drink("Reindeer RAM", "Boost memories of your big day with this elegant peppermint martini!", "Vodka", ["Vodka", "Candy Canes", "Marshmallow Creme"], "Winter", "Wedding", "../images/reindeer.png", "Crush peppermint, swirl, and serve.", "Author - Jessica P.");
  
  new Drink('The Pitcher of Dorian Grey Goose', '"Experience is merely the name men gave to their mistakes." ~Oscar Wilde  "Lemonade concentrate and vodka!? I\'ll try that mistake!" ~Robert Zimmerman', 'Vodka', ['10 Sprigs Fresh Mint', '12 oz Frozen Lemonade Concentrate', '16 oz Grey Goose Vodka', 'Cucumber, Sliced into Wheels'], 'Winter', 'Holiday', 'Image', 'Tear the mint and place in the pitcher. Add the lemonade concentrate and stir until thawed. Pour in the vodka and three cups of cold water and stir. Serve over ice and garnish with cucumber.', 'Author - Robert Z')
  
  new Drink('HTML Button', 'A classic White Russian cocktail.', 'Vodka', ['Vodka', 'Coffee Liqueur', 'Cream or Milk'], 'Winter', 'Night-Out', './images/Layered Color Drink.png', 'Add 2 parts Vodka, 1 part coffee liqueur, and 1 part cream.', 'Author - Matt C.');
  
  new Drink('Tequila Mockingbird', '"Harper Lee is going to publish a sequel after 55 years!? And you people think I write slow. ~George R.R. Martin"', 'Tequila', ['1-1/2 oz Tequila', '2 Drops Alabama Hot Sauce', '1 Dill Pickle'], 'Summer', 'Holiday', 'Image', 'Pour the tequila into a shot glass, add the hot sauce, and slam that bad boy back before chasing with a big chomp of pickle.', 'Author - Robert Z');
  
  new Drink('GuavaScript', 'If (let feeling === good) {getThisDrink();}', 'Tequila', ['Guava Nectar', 'Tequila', 'Lime', 'Mint'], 'Summer', "Night-Out", './images/Lime Drink.png', 'Mix Lime Juice, Tequila, and Guava Nectar in 1:2:6 ratio. Garnish with mint and lime slice.', 'Author - Matt C.');
  
  new Drink("Aretha Franklin", "Nothing like a big woman to keep you warm at a winter wonderland wedding!", "Tequila", ["Can-do Attitude", "A Whole Lot Of Love"], "Autumnn", "Wedding", "../images/Layered Color Drink.png", "Squeeze it, strain it, and hold on for dear life!", "Author - Jesse D");
  
  new Drink('Drankenstein', 'Heads Up: More than a few couples have played their own version of doctor after downing two or three of these monsters.', 'Tequila', ['1 oz Melon Liqueur', '1 oz Tequila', '12 oz Club Soda'], 'Autumn', 'Holiday', 'Image', 'Pour the liqueur and tequila over ice in a highball glass, then fill to the top with club soda.', 'Author - Robert Z');
  
  new Drink("Python Paloma", "Enjoying this delicious treat is fun in any language!", "Tequila", ["Tequila", "Pink Grapefruit", "Lime Juice", "Coarse Salt"], "Autumn", "Night Out", "../images/python.png", "Press grapefruit, squeeze lime, and mix well.", "Author - Jessica P.");
  
  new Drink('Tequila and Invoke', 'Invoke this drink to render a good time.', 'Tequila', ['Tequila', 'Coke', 'Lime'], 'Winter', 'Wedding', './images/Lime Drink.png', 'Mix 1 part tequila and 2 parts coke and add a slice of lime.', 'Author - Matt C.');
  
  new Drink("Covid Shots", "This cocktail is 97% effective in inebriating the general population", "Tequila", ["Extra Tequila", "Social Distancing"], "Winter", "Holiday", "../images/examplePic.png", "Serve in a needless syringe, and chase it with a second dose!", "Author - Jesse D");
  
  new Drink("Snowy Syntax Smash", "Baby, it's cold outside! Snuggle up with this smooth and crisp drink.", "Tequila", ["Tequila", "Pomegranate", "Honey", "Fresh Ginger"], "Winter", "Night Out", "Chill and serve cold for maximum snuggle-ability.", "../images/smash.png", "Author - Jessica P.");

  new Drink('A Confederacy of Ounces', '"Oh, Fortuna, you capricious sprite!" ~Ignatius J. Reilly', 'Whiskey', ['1/2 oz Anise Liqueur', '1-1/2 oz Rye Whiskey', '1 tsp Sugar', '3 Dashes Peychaud\'s Bitters', '2 Dashes Angostura Bitters', 'Lemon Twist'], 'Summer', 'Wedding', 'Image', 'Pour the liqueur into a chilled rocks glass, swirl to coat then toss anything that doesn\'t stick. Add the remaining ingredients to a shaker with ice, shake well and strain into a glass.', 'Author - Robert Z');
  
  new Drink('Rum Filled Revelries', 'Take this packed drink and your party could easily rival that of a Dionysian bacchanal!', 'Whiskey', ["Rum", "Risks", "Regrets"], 'Summer', 'Night-Out', 'Image', "Smash it, pass it, and forget everything you do tonight!", "Author – Anvay B");
  
  new Drink('Moonlight Moonshine', 'A smooth swill will undoubtedly infuse you with giddy warmth on winter nights!', 'Whiskey', ["Moonshine", "Mirth", "maybe Mistakes"], 'Winter', 'Holiday', 'Image', "Brew it, drink it, and get rid of all the evidence!", "Author – Anvay B");

  new Drink('Whiskey Partner Power Hour', 'Perfect for a nice Friday afternoon listening to cool people talk about their experiences in coding.', 'Whiskey', ['Whiskey', 'Lemon Juice', 'Simple Syrup', 'Maraschino Cherry (Optional)'], 'Summer', 'Holiday', 'Mix, shake, serve.', 'Author - Matt C.');
    
  new Drink("Chocolate Constructor", "Once you've made one, you've made them all!", "Whiskey", ["Whiskey", "Chocolate Bitters", "Orange"], "Autumn", "Wedding", "../images/chocolate.png", "Cozy up, pour up, and bottom's up!", "Author - Jessica P.");
  
  new Drink("Politically Incorrect", "Show your peers that you're the old white man that nobody wants to listen to anymore", "Whiskey", ["Intolerance", "Blatant Disregard"], "Autumn", "Holiday", "../images/examplePic.png", "Stonewall it, pass it in the middle of the night, and take it from a non-profit fund!");
  
  new Drink('The S(ide)carlet Letter', 'So tasty you may just end up parading through town afterward. Have no shame: this baby\'s all yours!', 'Whiskey', ['Sugared Cocktail Rim', '1 oz Cherry Juice', '1/2 oz Brandy', '1/2 oz Triple Sec'], 'Autumn', 'Night-Out', 'Image', 'Rim a chilled cocktail glass with sugar and place aside. Shake the ingredients with ice and strain into the glass.', 'Author - Robert Z');
  
  new Drink('Memory Leak', 'When your in-laws are causing a scene and you\'d rather just forget the whole night.', 'Whiskey', ['Whiskey', 'Brown Sugar', 'Strong Hot Coffee', 'Irish Whiskey', 'Heavy Cream'], 'Winter', 'Wedding', 'Mix whiskey, sugar, and coffee. Add cream on top. Do not stir.', 'Author - Matt C.');
    
  new Drink("Boolean Buttered Beer", "Cold outside? Warm up with this magical spiced drink.", "Whiskey", ["Whiskey", "Agave Nectar", "Unsalted Butter", "Ground Cloves"], "Winter", "Night Out", "../images/boolean.png", "Swish and flick!", "Author - Jessica P.");

  new Drink('Frosé', 'Make any seaside getaway complete with this classic slushy!', 'Non-Alcoholic Mixer', ["replacement Rosé", "Raspberries", "Rest"], 'Summer', 'Wedding', 'Image', "Just go out and buy some pink lemonade and berries. After all, today is your rest day.", "Author - Anvay B");

  new Drink("Bomb Pop", "A modernized twist on the original red, white, and blue popsicle", "Non-Alcoholic Mixer", ["Fruit Punch", "Artificial Food Coloring"], "Summer", "Holiday", "../images/examplePic.png", "Blend each colored punch with coloring and ice, then layer each colored slush mix into glass and serve!", "Author - Jesse D");
  
  new Drink("Method Margarita Mocktail", "The fun is built-in to this tart splash of summer!", "Non-Alcoholic Mixer", ["Limeade", "Simple Syrup", "Club Soda", "Coarse Salt"], "Summer", "Night Out", "../images/method.png", "Mix well, sip, and enjoy.", "Author - Jessica P.");
  
  new Drink('Fall in Love', 'This sweet champagne fulfills the feeling of meeting the one of your autumn dreams.', 'Non-Alcoholic Mixer', ["Apple Cider", "Ginger Beer", "Honey"], 'Autumn', 'Wedding', 'Image', "With the love in the air and leaves everywhere, meet the one to become a pair!", "Author - Anvay B");
  
  new Drink('Poison Appletini', "You won't know how this tastes until you take a sip, but by then it's already too late...", 'Non-Alcoholic Mixer', ["Apple Juice", "Lime Drops", "Cayenne Cinnamon"], 'Autumn', 'Holiday', 'Image', "Pick your poison and pound that potion! Add green color for the aesthetic.", "Author - Anvay B");
  
  new Drink("Smoking Sea SS", "Get spooky with this deep-sea inspired Halloween mocktail.", "Non-Alcoholic Mixer", ["Cranberry Juice", "Apple Cider", "Dry Ice"], "Autumn", "Night Out", "../images/smoking.png", "Shake, stir, and dive in!", "Author - Jessica P.");
    
  new Drink('Mistletoe Mimosa', 'Make this holiday all holly-jolly with this Christmas cocktail!', ["Barley Tea", "Maple Syrup", "Mistletoe Magic"], 'Non-Alcoholic Mixer', 'Winter', 'Holiday', 'Image', "Mix the strong tea with syrup and find someone for that final ingredient ;) ", "Author, - Anvay B");

  new Drink('Git Pulled Wine', 'A warm drink for a happy occasion.', 'Non-Alcoholic Mixer', ['Grape Juice', 'Orange', 'Star Anise', 'Cinnamon Sticks'], 'Winter', 'Wedding', 'In a large oven, warm a bottle of grape juice with sliced oranges, star anise, and cinnamon sticks.', 'Author - Matt C.')
    
  new Drink('The Wonderful Blizzard of Oz', 'Follow your heart and freeze your brain!', 'Non-Alcoholic Mixer', ['5 oz Pineapple Juice', '2 oz Coconut Cream', '1 Banana'], 'Winter', 'Night-Out', 'Image', 'Add the ingredients, plus a handful of ice, to a blender. Blend until smooth, and pour into a rocks or highball glass.', 'Author - Robert Z');
}






createDrinks();
randomDrink();
console.log(drink);

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