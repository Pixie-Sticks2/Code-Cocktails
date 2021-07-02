'use strict';

// Global Variables
const liquorFormElem = document.getElementById('liquorForm');
Drink.prototype.allDrinksArray = [];
let currentDrink = '';
let drink;
let favoriteDrinks = [];
let optionArray = ["liquor", "season", "event"];


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


Drink.prototype.renderCard = function() {
  let containerElem = document.getElementById("container")
  let cardElem = document.createElement("div");
  cardElem.setAttribute("id", "recipe_card");
  containerElem.appendChild(cardElem);
  let column1 = document.createElement("div");
  cardElem.appendChild(column1);
  let imageElem = document.createElement("img");
  imageElem.setAttribute("id", "drinkImage");
  column1.appendChild(imageElem);
  let authorElem = document.createElement("p");
  authorElem.setAttribute("id", "author");
  column1.appendChild(authorElem);
  
  let column2 = document.createElement("div");
  cardElem.appendChild(column2);
  let nameElem = document.createElement("h2");
  nameElem.setAttribute("id", "name");
  column2.appendChild(nameElem);
  let descriptionElem = document.createElement("h3");
  descriptionElem.setAttribute("id", "description");
  column2.appendChild(descriptionElem);
  let ulTitleElem = document.createElement("h3");
  ulTitleElem.textContent = "Ingredients:";
  ulTitleElem.setAttribute("id", "ul_ingredients");
  column2.appendChild(ulTitleElem);
  let liquorTypeElem = document.createElement("ul");
  liquorTypeElem.setAttribute("id", "liquorRecipe");
  column2.appendChild(liquorTypeElem);
  let directionsElem = document.createElement("h3");
  directionsElem.setAttribute("id", "directions");
  column2.appendChild(directionsElem);
  
  let column3 = document.createElement("div");
  cardElem.appendChild(column3);
  let heartButton = document.createElement("button");
  heartButton.setAttribute("id", "heart");
  heartButton.setAttribute("class", "greyHeart");
  heartButton.setAttribute("onclick", "toggleFavorite()");
  column3.appendChild(heartButton);
  let clearButton = document.createElement("button");
  clearButton.setAttribute("id", "clear");
  clearButton.setAttribute("onclick", "clearCard()");
  clearButton.textContent = "Make Another Drink";
  column3.appendChild(clearButton);

  nameElem.textContent = this.name;
  imageElem.src = this.image;
  descriptionElem.textContent = this.description;
  
  directionsElem.textContent = this.directions;
  authorElem.textContent = this.bartender;

  for (let i = 0; i < this.recipe.length; i++) {
    let recipeElem = document.createElement("li");
    recipeElem.textContent = this.recipe[i];
    liquorTypeElem.appendChild(recipeElem);
  }
}

function toggleFavorite() {

  let heartColor = document.getElementById("heart");
  heartColor.classList.toggle("redHeart");
  console.log(heartColor.classList);

  if (heartColor.classList.contains("redHeart")) {
  storeFavoriteDrinks();
  console.log(favoriteDrinks);
  console.log(currentDrink);
  } else {
  removeFavoriteDrinks();
   
  console.log(favoriteDrinks);
  console.log(currentDrink);
  }
}

function clearCard() {
  document.getElementById("container").innerHTML = "";
}

function clearGrid() {
  document.getElementById("favoriteGrid").innerHTML = "";
}


function storeFavoriteDrinks() {
  if (favoriteDrinks.includes(currentDrink)) {
    return;
  }
  
  favoriteDrinks.push(currentDrink);
  let stringDrinks = JSON.stringify(favoriteDrinks);
  localStorage.setItem('storedDrinks', stringDrinks);
}

function removeFavoriteDrinks() {
  for (let i = 0; i < favoriteDrinks.length; i++) {
    if (currentDrink == favoriteDrinks[i]) {
      favoriteDrinks.splice(i, 1);
    }
  }
  let stringDrinks = JSON.stringify(favoriteDrinks);
  localStorage.setItem('storedDrinks', stringDrinks);
}

function getFavoriteDrinks() {
  let retrievedDrinks = localStorage.getItem('storedDrinks');
  if (retrievedDrinks) {
    let parsedDrinks = JSON.parse(retrievedDrinks);
    for (let drink of parsedDrinks) {
      let name = drink.name;
      let description = drink.description;
      let recipe = drink.recipe;
      let liquorType = drink.liquorType;
      let season = drink.season;
      let occasion = drink.occasion;
      let image = drink.image;
      let directions = drink.directions;
      let bartender = drink.bartender;
      let arrayPush = new Drink(name, description, liquorType, recipe, season, occasion, image, directions, bartender);
      favoriteDrinks.push(arrayPush);
      Drink.prototype.allDrinksArray = [];
      createDrinks();
    }
    renderFavoriteDrinks();
  }
}

function favoriteRemoval(i) {
  favoriteDrinks.splice(i, 1); 
  let stringDrinks = JSON.stringify(favoriteDrinks);
  localStorage.setItem('storedDrinks', stringDrinks);
  clearGrid();
  renderFavoriteDrinks();
  renderMessage();
  console.log(favoriteDrinks);
}

function renderFavoriteDrinks() {
  let gridElem = document.getElementById("favoriteGrid");
  for (let i = favoriteDrinks.length - 1; i >= 0; i--) {
    let faveDrink = favoriteDrinks[i]
    let cardElem = document.createElement("div");
    cardElem.setAttribute("class", "favoriteDrink favoriteCard");
    gridElem.appendChild(cardElem);
    let faveDiv = document.createElement("div");
    faveDiv.setAttribute("class", "faveBox");
    cardElem.appendChild(faveDiv);
    let heartButton = document.createElement("button");
    heartButton.setAttribute("id", "heart2");
    heartButton.setAttribute("class", "redHeart");
    heartButton.setAttribute("onclick", "favoriteRemoval(" + i + ")");
    faveDiv.appendChild(heartButton);
    let contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "contentDiv");
    cardElem.appendChild(contentDiv);
    let imgElem = document.createElement("img");
    imgElem.src = faveDrink.image;
    contentDiv.appendChild(imgElem);
    let nameElem = document.createElement("h2");
    nameElem.textContent = faveDrink.name;
    contentDiv.appendChild(nameElem);
    let descriptionElem = document.createElement("p");
    descriptionElem.textContent = faveDrink.description;
    contentDiv.appendChild(descriptionElem);
    let listElem = document.createElement("ul");
    contentDiv.appendChild(listElem);
    let directionsElem = document.createElement("p");
    directionsElem.textContent = faveDrink.directions;
    contentDiv.appendChild(directionsElem);
    let bartenderElem = document.createElement("h3");
    bartenderElem.textContent = faveDrink.bartender;
    contentDiv.appendChild(bartenderElem);

    for (let j = 0; j < faveDrink.recipe.length; j++) {
      let recipeItem = document.createElement("li");
      recipeItem.textContent = faveDrink.recipe[j];
      listElem.appendChild(recipeItem);
    }
  
    // let heartColor = document.getElementById("heart");
    // heartColor.classList.toggle("redHeart");
    // console.log(heartColor.classList);
  }
}

//user selects Randomize Drink option
function randomDrink() {
  clearCard();
  let randomNum = Math.floor(Math.random() * Drink.prototype.allDrinksArray.length) + 1;
  currentDrink = Drink.prototype.allDrinksArray[randomNum];
  currentDrink.renderCard();
  storeFavoriteDrinks();
}

function errorPop() {
  let containerElem = document.getElementById("container");
  let cardElem = document.createElement("div");
  cardElem.setAttribute("id", "error_card");
  containerElem.appendChild(cardElem);
  let errorMessage = document.createElement("h2");
  errorMessage.textContent = "Looks like our bartenders need a little more information. Please check your choices and try again."
  cardElem.appendChild(errorMessage);
  let clearButton = document.createElement("button");
  clearButton.setAttribute("id", "clear");
  clearButton.setAttribute("class", "orangeButton");
  clearButton.setAttribute("onclick", "clearCard()");
  clearButton.textContent = "Go Back and Try Again";
  cardElem.appendChild(clearButton);
  let rowImage = document.createElement("img");
  rowImage.src = "./images/Drink Row.png";
  cardElem.appendChild(rowImage);
}



// Event Listener
if (liquorFormElem) { 
liquorFormElem.addEventListener('submit', handleSubmit)
}

let randomSelectorElem = document.getElementById('chalkboard');

if (randomSelectorElem) {
randomSelectorElem.addEventListener('click', randomDrink);
}

for (const option of document.querySelectorAll(".user-option")) {
  option.addEventListener('click', function() {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.user-option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.choice-label').querySelector('.choice-label-box span').textContent = this.textContent;
    } else if (this.classList.contains('selected')) {
      this.closest('.choice-label').querySelector('.choice-label-box span').textContent = this.textContent;
    }
  })
  console.log(optionArray);
}

for (const innerDiv of document.querySelectorAll(".user-choice-parent")) {
  innerDiv.addEventListener('click', function() {
      this.querySelector('.choice-label').classList.toggle('open');
  })
}

for (const option of document.querySelectorAll(".user-option")) {
  option.addEventListener('click', function() {
  
    console.log(this.classList);
    if (this.classList.contains("liquor")) {
      optionArray.splice(0, 1, this.id);
    }
    if (this.classList.contains("season")) {
      optionArray.splice(1, 1, this.id);
    }
    if (this.classList.contains("event")) {
      optionArray.splice(2, 1, this.id);
    }
    console.log(optionArray);
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.user-option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.user-options').querySelector('.choice-label-box span').textContent = this.textContent;
    }
  })
}

function handleSubmit(event) {
  event.preventDefault();
  let liquorOption = optionArray[0];
  let seasonOption = optionArray[1];
  let occasionOption = optionArray[2];
  console.log(liquorOption);
  console.log(seasonOption);
  console.log(occasionOption);
  if (liquorOption === "liquor" || seasonOption === "season" || occasionOption === "event") {
    errorPop();
    return;
  }
  for (let i = 0; i < Drink.prototype.allDrinksArray.length; i++) {
    if (liquorOption == Drink.prototype.allDrinksArray[i].liquorType && seasonOption == Drink.prototype.allDrinksArray[i].season && occasionOption == Drink.prototype.allDrinksArray[i].occasion) {
      currentDrink = Drink.prototype.allDrinksArray[i];
    }
  }
  // render recipe card
  currentDrink.renderCard();
}

window.addEventListener('click', function(option) {
  for (const select of document.querySelectorAll('.choice-label')) {
      if (!select.contains(option.target)) {
          select.classList.remove('open');
      }
  }
});

function renderMessage() {
  let faveMainElem = document.getElementById("faveMain");
  if (favoriteDrinks.length === 0) {
  let faveMessage1 = document.createElement("p");
  faveMessage1.setAttribute("class", "noFave");
  faveMessage1.textContent = "Hmmm... Your favorite shelf is empty.";
  faveMainElem.appendChild(faveMessage1);
  let faveMessage2 = document.createElement("p");
  faveMessage2.setAttribute("class", "noFave");
  faveMessage2.textContent = "Why don't we visit the bar and make a drink?";
  faveMainElem.appendChild(faveMessage2);
  }
}

//Robert
function createDrinks() {
  new Drink("Alabama Booty Shaker", "This delicious concoction is guaranteed to get the wedding on the dance floor!", "Tequila", ["Tequila", "Lowered Expectations", "Lively music"], "Summer", "Wedding", "../images/jesse-Tiki Drink.png", "Shake it, stir it, and pour it down your gullet!", "Author - Jesse D");
  
  new Drink('Huckleberry Sin', 'Enjoy the sunset with this excoriating critique of slavery - but make sure to stay alert for riverbank beverage bandits!', 'Vodka', ['5 Fresh Blueberries', '2 oz Huckleberry Flavored Vodka', '12 oz Club Soda'], 'Summer', 'Wedding', "../images/anvay-pinkfizz.png", 'Muddle the blueberries in the bottom of a mason jar. Add ice and pour in the vodka, filling to the top with club soda.', 'Author - Robert Z');
  

  new Drink("Backcountry Sour Smash", "This potent drink is a not-so-subtle blend of pine, body odor, and granola", "Vodka", ["Vodka", "Exhaustion", "Unfiltered Water"], "Summer", "Holiday", "../images/jesse-citrus.png", "Shrug it off, dust it off, and serve it in your hiking boot!", "Author - Jesse D");
 
  new Drink('Text-Overflow Rule', 'A Moscow Mule', 'Vodka', ['Vodka', 'Ginger Beer', 'Lime Juice'], 'Summer', 'Night-out', "../images/anvay-pinkfizz.png", 'Pour vodka and ginger beer into a copper mug and a splash of lime juice.', 'Author - Matt C.')
  
  new Drink('Gulp-iver\'s Travels', 'A drink worth setting sail for. The Brobdingnagians would agree!', 'Vodka', ['1/2 oz Vodka', '1/2 oz Peach Schnapps', '1/2 oz Grapefruit Juice', '1/2 oz Cranberry Juice'], 'Autumn', 'Wedding', "../images/anvay-fire.png", 'Shake the ingredients with ice and strain into an empty rocks glass. This goes down in a single swig.', 'Author - Robert Z');

  new Drink("Drunken Spice Latte", "This Russian liquor takes an adult twist on every basic white girl's coffee of choice!", "Vodka", ["Vodka", "Tiny Pumpkins","Instagram Captions","Latte Foam Art"], "Autumn", "Holiday", "../images/anvay-pinkfizz.png", "Listen to Bo Burnam's 'White Woman's Instagram' song and add whatever you want from that. Top it all off with vodka.", "Author - Anvay B");
   
  new Drink("No 'Regerts'", "This sneaky little cocktail might force you to delete your social media accounts!", "Vodka", ["Vodka", "Poor Life Choices", "Peer Pressure"], "Autumn", "Night-out", "../images/jess-pineapple.png", "Carry on with reckless abandon, throw in a misspelled tattoo, and serve it on a stranger's bellybutton.", "Author - Jesse D");
  
  new Drink("Reindeer RAM", "Boost memories of your big day with this elegant peppermint martini!", "Vodka", ["Vodka", "Candy Canes", "Marshmallow Creme"], "Winter", "Wedding", "../images/anvay-fire.png", "Crush peppermint, swirl, and serve.", "Author - Jessica P.");
  
  new Drink('The Pitcher of Dorian Grey Goose', '"Experience is merely the name men gave to their mistakes." ~Oscar Wilde  "Lemonade concentrate and vodka!? I\'ll try that mistake!" ~Robert Zimmerman', 'Vodka', ['10 Sprigs Fresh Mint', '12 oz Frozen Lemonade Concentrate', '16 oz Grey Goose Vodka', 'Cucumber, Sliced into Wheels'], 'Winter', 'Holiday', "../images/jess-pineapple.png", 'Tear the mint and place in the pitcher. Add the lemonade concentrate and stir until thawed. Pour in the vodka and three cups of cold water and stir. Serve over ice and garnish with cucumber.', 'Author - Robert Z')
  
  new Drink('HTML Button', 'A classic White Russian cocktail.', 'Vodka', ['Vodka', 'Coffee Liqueur', 'Cream or Milk'], 'Winter', 'Night-out', "../images/jess-pineapple.png", 'Add 2 parts Vodka, 1 part coffee liqueur, and 1 part cream.', 'Author - Matt C.');
  
  new Drink('Tequila Mockingbird', '"Harper Lee is going to publish a sequel after 55 years!? And you people think I write slow. ~George R.R. Martin"', 'Tequila', ['1-1/2 oz Tequila', '2 Drops Alabama Hot Sauce', '1 Dill Pickle'], 'Summer', 'Holiday', "../images/matt-coke.png", 'Pour the tequila into a shot glass, add the hot sauce, and slam that bad boy back before chasing with a big chomp of pickle.', 'Author - Robert Z');
  
  new Drink('GuavaScript', 'If (let feeling === good) {getThisDrink();}', 'Tequila', ['Guava Nectar', 'Tequila', 'Lime', 'Mint'], 'Summer', "Night-out", "../images/matt-coke.png", 'Mix Lime Juice, Tequila, and Guava Nectar in 1:2:6 ratio. Garnish with mint and lime slice.', 'Author - Matt C.');
  
  new Drink("Aretha Franklin", "Nothing like a big woman to keep you warm at a winter wonderland wedding!", "Tequila", ["Tequila", "Can-do Attitude", "A Whole Lot Of Love"], "Autumn", "Wedding", "../images/jesse-tropicalrazz.png", "Squeeze it, strain it, and hold on for dear life!", "Author - Jesse D");

  new Drink('Drankenstein', 'Heads Up: More than a few couples have played their own version of doctor after downing two or three of these monsters.', 'Tequila', ['1 oz Melon Liqueur', '1 oz Tequila', '12 oz Club Soda'], 'Autumn', 'Holiday', "../images/matt-coke.png", 'Pour the liqueur and tequila over ice in a highball glass, then fill to the top with club soda.', 'Author - Robert Z');
  
  new Drink("Python Paloma", "Enjoying this delicious treat is fun in any language!", "Tequila", ["Tequila", "Pink Grapefruit", "Lime Juice", "Coarse Salt"], "Autumn", "Night-out", "../images/jess-bluemartini.png", "Press grapefruit, squeeze lime, and mix well.", "Author - Jessica P.");
  
  new Drink('Tequila and Invoke', 'Invoke this drink to render a good time.', 'Tequila', ['Tequila', 'Coke', 'Lime'], 'Winter', 'Wedding', "../images/anvay-fire.png", 'Mix 1 part tequila and 2 parts coke and add a slice of lime.', 'Author - Matt C.');
  
  new Drink("Covid Shots", "This cocktail is 97% effective in inebriating the general population", "Tequila", ["Tequila", "Extra Tequila", "Social Distancing"], "Winter", "Holiday", "../images/anvay-fire.png", "Serve in a needless syringe, and chase it with a second dose!", "Author - Jesse D");
  
  new Drink("Snowy Syntax Smash", "Baby, it's cold outside! Snuggle up with this smooth and crisp drink.", "Tequila", ["Tequila", "Pomegranate", "Honey", "Fresh Ginger"], "Winter", "Night-out", "../images/jess-bluemartini.png", "Chill and serve cold for maximum snuggle-ability.", "Author - Jessica P.");

  new Drink('A Confederacy of Ounces', '"Oh, Fortuna, you capricious sprite!" ~Ignatius J. Reilly', 'Whiskey', ['Whiskey', '1/2 oz Anise Liqueur', '1-1/2 oz Rye Whiskey', '1 tsp Sugar', '3 Dashes Peychaud\'s Bitters', '2 Dashes Angostura Bitters', 'Lemon Twist'], 'Summer', 'Wedding', "../images/jess-bluemartini.png", 'Pour the liqueur into a chilled rocks glass, swirl to coat then toss anything that doesn\'t stick. Add the remaining ingredients to a shaker with ice, shake well and strain into a glass.', 'Author - Robert Z');
  
  new Drink('Rum Filled Revelries', 'Take this packed drink and your party could easily rival that of a Dionysian bacchanal!', 'Whiskey', ["Rum", "Risks", "Regrets"], 'Summer', 'Night-out', "../images/jess-bluemartini.png", "Smash it, pass it, and forget everything you do tonight!", "Author – Anvay B");
  
  new Drink('Moonlight Moonshine', 'A smooth swill will undoubtedly infuse you with giddy warmth on winter nights!', 'Whiskey', ["Moonshine", "Mirth", "maybe Mistakes"], 'Winter', 'Holiday', "../images/matt-mint.png", "Brew it, drink it, and get rid of all the evidence!", "Author – Anvay B");

  new Drink('Whiskey Partner Power Hour', 'Perfect for a nice Friday afternoon listening to cool people talk about their experiences in coding.', 'Whiskey', ['Whiskey', 'Lemon Juice', 'Simple Syrup', 'Maraschino Cherry (Optional)'], 'Summer', 'Holiday', "../images/matt-mint.png", 'Mix, shake, serve.', 'Author - Matt C.');
    
  new Drink("Chocolate Constructor", "Once you've made one, you've made them all!", "Whiskey", ["Whiskey", "Chocolate Bitters", "Orange"], "Autumn", "Wedding", "../images/jess-chocolate.png", "Cozy up, pour up, and bottom's up!", "Author - Jessica P.");
  
  new Drink("Politically Incorrect", "Show your peers that you're the old white man that nobody wants to listen to anymore", "Whiskey", ["Whiskey", "Intolerance", "Blatant Disregard"], "Autumn", "Holiday", "../images/matt-mint.png", "Stonewall it, pass it in the middle of the night, and take it from a non-profit fund!");
  
  new Drink('The S(ide)carlet Letter', 'So tasty you may just end up parading through town afterward. Have no shame: this baby\'s all yours!', 'Whiskey', ['Whiskey', 'Sugared Cocktail Rim', '1 oz Cherry Juice', '1/2 oz Brandy', '1/2 oz Triple Sec'], 'Autumn', 'Night-out', "../images/matt-mint.png", 'Rim a chilled cocktail glass with sugar and place aside. Shake the ingredients with ice and strain into the glass.', 'Author - Robert Z');
  
  new Drink('Memory Leak', 'When your in-laws are causing a scene and you\'d rather just forget the whole night.', 'Whiskey', ['Whiskey', 'Brown Sugar', 'Strong Hot Coffee', 'Irish Whiskey', 'Heavy Cream'], 'Winter', 'Wedding', "../images/matt-mint.png", 'Mix whiskey, sugar, and coffee. Add cream on top. Do not stir.', 'Author - Matt C.');
    
  new Drink("Boolean Buttered Beer", "Cold outside? Warm up with this magical spiced drink.", "Whiskey", ["Whiskey", "Agave Nectar", "Unsalted Butter", "Ground Cloves"], "Winter", "Night-out", "../images/jess-boolean.png", "Swish and flick!", "Author - Jessica P.");

  new Drink('Frosé', 'Make any seaside getaway complete with this classic slushy!', 'Non-Alcoholic Mixer', ['Non-Alcoholic Mixer', "replacement Rosé", "Raspberries", "Rest"], 'Summer', 'Wedding', "../images/matt-mint.png", "Just go out and buy some pink lemonade and berries. After all, today is your rest day.", "Author - Anvay B");

  new Drink("Bomb Pop", "A modernized twist on the original red, white, and blue popsicle", "Non-Alcoholic Mixer", ["Non-Alcoholic Mixer", "Fruit Punch", "Artificial Food Coloring"], "Summer", "Holiday", "../images/matt-mint.png", "Blend each colored punch with coloring and ice, then layer each colored slush mix into glass and serve!", "Author - Jesse D");
  
  new Drink("Method Margarita Mocktail", "The fun is built-in to this tart splash of summer!", "Non-Alcoholic Mixer", ['Non-Alcoholic Mixer', "Limeade", "Simple Syrup", "Club Soda", "Coarse Salt"], "Summer", "Night-out", "../images/matt-mint.png", "Mix well, sip, and enjoy.", "Author - Jessica P.");
  
  new Drink('Fall in Love', 'This sweet champagne fulfills the feeling of meeting the one of your autumn dreams.', 'Non-Alcoholic Mixer', ['Non-Alcoholic Mixer', "Apple Cider", "Ginger Beer", "Honey"], 'Autumn', 'Wedding', "../images/matt-mint.png", "With the love in the air and leaves everywhere, meet the one to become a pair!", "Author - Anvay B");
  
  new Drink('Poison Appletini', "You won't know how this tastes until you take a sip, but by then it's already too late...", 'Non-Alcoholic Mixer', ["Apple Juice", "Lime Drops", "Cayenne Cinnamon"], 'Autumn', 'Holiday', "../images/matt-mint.png", "Pick your poison and pound that potion! Add green color for the aesthetic.", "Author - Anvay B");
  
  new Drink("Smoking See SS", "Get spooky with this deep-sea inspired Halloween mocktail.", "Non-Alcoholic Mixer", ['Non-Alcoholic Mixer', "Cranberry Juice", "Apple Cider", "Dry Ice"], "Autumn", "Night-out", "../images/jess-eyeball.png", "Shake, stir, and dive in!", "Author - Jessica P.");
    
  new Drink('Mistletoe Mimosa', 'Make this holiday all holly-jolly with this Christmas cocktail!', 'Non-Alcoholic Mixer', ["Barley Tea", "Maple Syrup", "Mistletoe Magic"], 'Winter', 'Holiday', "../images/matt-mint.png", "Mix the strong tea with syrup and find someone for that final ingredient ;) ", "Author, - Anvay B");

  new Drink('Git Pulled Wine', 'A warm drink for a happy occasion.', 'Non-Alcoholic Mixer', ['Non-Alcoholic Mixer', 'Grape Juice', 'Orange', 'Star Anise', 'Cinnamon Sticks'], 'Winter', 'Wedding', "../images/matt-mint.png", 'In a large oven, warm a bottle of grape juice with sliced oranges, star anise, and cinnamon sticks.', 'Author - Matt C.')
    
  new Drink('The Wonderful Blizzard of Oz', 'Follow your heart and freeze your brain!', 'Non-Alcoholic Mixer', ['Non-Alcoholic Mixer', '5 oz Pineapple Juice', '2 oz Coconut Cream', '1 Banana'], 'Winter', 'Night-out', "../images/matt-mint.png", 'Add the ingredients, plus a handful of ice, to a blender. Blend until smooth, and pour into a rocks or highball glass.', 'Author - Robert Z');
}


createDrinks();
getFavoriteDrinks();
renderMessage();
storeAllDrinks();
getAllDrinks();


