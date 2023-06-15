// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

 

// input:
// story length, moral lessons, age group,language


// output
//  story, storyteller and translator"


// process
// create class Story that has attribute  length, moral lessons, and the age group
class Story {
    constructor(storyLength,moralLessons,ageGroup,language) {
        this.storyLength = storyLength;
        this.moralLessons = moralLessons ;
        this.ageGroup = ageGroup;
        this.language= language

        
    }
}

const stories = [
    new Story("23mins",  "Success","10-30","english"),
    new Story("50mins","patient","25-30","French"),
    new Story("30mins","God's love","1-5","Kinyarwanda")

    
   
];

let storyTeller= ["kidStories","youthStories","OldStories"]
let translator=["EnglishToFrench","KinyarwandaToFrench","FrenchToEnglish","EnglishToKinyarwanda"]


function modelStoryTellerAnd(stories) {
   
    songs.forEach(song => {
        if (this.language==="english" && this.ageGroup== "25-30"){ 
        for(i=0;i<storyTeller.length;i++){
            if(storyTeller[i]="youthStories"){
               return storyTeller[i]
            }
        }
      for (i=0;i<translator.length;i++){
        if (translator[i]="EnglishToFrench"&& "EnglishToKinyarwanda"){
            return translator[i]
        }
      }  
    }
    });
    
}

class KidStory extends Story {
    constructor(storyLength, moralLessons, ageGroup, language) {
        super(storyLength, moralLessons, ageGroup, language);
        
    }
}


// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.


// Input:
// name,country,ingredients,preparationTime,cookingMethod,nutritionalInfo

// output:
// displayRecipe

// process:
// create class Recipe that has construtor unique ingredients, preparation time, cooking method, and nutritionalInformation
//  add subclasses, which are recipe from  different countries
//  add  display recipe methods that allows the user to see the unique ingredients,preparation time, cooking method, and nutritional
// 
class Recipe {
    constructor(name, country, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
      this.name = name;
      this.country = country;
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
      this.nutritionalInfo = nutritionalInfo;
    }
  
    displayRecipe() {
      console.log(`Recipe: ${this.name}`);
      console.log(`Country: ${this.country}`);
      console.log(`Ingredients: ${this.ingredients.join(', ')}`);
      console.log(`Preparation Time: ${this.preparationTime}`);
      console.log(`Cooking Method: ${this.cookingMethod}`);
      console.log(`Nutritional Information: ${this.nutritionalInfo}`);
    }
  }
  
  class MoroccoRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, spiceLevel) {
      super(name, 'Morocco', ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.spiceLevel = spiceLevel;
    }
  
    displayRecipe() {
      console.log(`cookingMethod:${this.cookingMethod}`)
      console.log(`Spice Level: ${this.spiceLevel}`);
      console.log(``)
    }
  }
  
  class EthiopianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, ) {
      super(name, 'Ethiopia', ingredients, preparationTime, cookingMethod, nutritionalInfo);
      
    }
  
    displayRecipe() {
      
      console.log(`ingredients: ${this.ingredients}`);
      console.log(`preparationTime:${this.preparationTime}`)
      console.log(`cookingMethod:${this.cookingMethod}`)
    }
  }
  
  class NigerianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, ) {
      super(name, 'Nigeria', ingredients, preparationTime, cookingMethod, nutritionalInfo);
    
    }
  
    displayRecipe() {
        console.log(`ingredients: ${this.ingredients}`);
        console.log(`preparationTime:${this.preparationTime}`)
        console.log(`cookingMethod:${this.cookingMethod}`)
    
    }
  }
  
  