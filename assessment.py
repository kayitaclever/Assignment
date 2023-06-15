# // **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# // down from generation to generation. Imagine you're creating an application that
# // records these oral stories and translates them into different languages. The
# // stories vary by length, moral lessons, and the age group they are intended for.
# // Think about how you would model `Story`, `StoryTeller`, and `Translator`
# // objects, and how inheritance might come into play if there are different types of
# // stories or storytellers.

 

# // input:
# // story length, moral lessons, age group,language


# // output
# //  story, storyteller and translator"


# // process


class Story:

    def __init__(self, story_length,moral_lessons,age_group,language):
    
        self.storyLength = storyLength
        self.moralLessons = moralLessons 
        self.ageGroup = ageGroup
        self.language= language

        



        stories =[ Story("23mins",  "Success","10-30","english"),Story("50mins","patient","25-30","French"),

        Story("30mins","God's love","1-5","Kinyarwanda") ]

    
    
   

        storyTeller= ["kidStories","youthStories","OldStories"]
        translator=["EnglishToFrench","KinyarwandaToFrench","FrenchToEnglish","EnglishToKinyarwanda"]


    def model_story_TellerAnd_translator(self,stories):
        for story in stories:
            if self.language=="French":
                return stories["FrenchToEnglish"]

        
            
          
class TranslatedStory(Story):
    def __init__(self, story_length, moral_lessons, age_group, language, translated_language):
            super().__init__(story_length, moral_lessons, age_group, language)
        self.translated_language = translated_language

        
    
    def translate(self):

        
        translated_story = translate_function(self.language, self.translated_language, self.storyLength)
        return translated_story
    
#         **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# // The app needs to handle recipes from different African countries, each with its
# // unique ingredients, preparation time, cooking method, and nutritional
# // information. Consider creating a `Recipe` class, and think about how you might
# // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# // methods.


#  Input:
# // name,country,ingredients,preparationTime,cookingMethod,nutritionalInfo

# // output:
# // displayRecipe

# // process:
# // create class Recipe that has construtor unique ingredients, preparation time, cooking method, and nutritionalInformation
# //  add subclasses, which are recipe from  different countries
# //  add  display recipe methods that allows the user to see the unique ingredients,preparation time, cooking method, and nutritional
# // 
class Recipe:
    def __init__(self, name,country,ingredients,preparationTime,cookingMethod,nutritionalInfo):
        self.name= name
        self.country= Country
        self.ingredients= ingredients
        self.preparationTime=preparationTime
        self.cookingMethod=cookingMethod
        self.nutritionalInfo= nutritionalInfo



    



       
    def display_recipe(self):
        print(f"Recipe: {self.name}")
        print(f"Country: {self.country}")
        print(f"Ingredients: {', '.join(self.ingredients)}")
        print(f"Preparation Time: {self.preparation_time}")
        print(f"Cooking Method: {self.cooking_method}")
        print(f"Nutritional Information: {self.nutritional_info}")


class MoroccanRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_info, spice_level):
        super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_info)
        self.spice_level = spice_level

    def display_recipe(self):
        
        print(f"")


class EthiopianRecipe(Recipe):
    def __init__(self, name, ingredients,preparation_time, cooking_method, nutritional_info):
        super().__init__(name,ingredients,preparation_time,cooking_method,nutritional_info)
        self.jera=jera
    def display_recipe(self):
        super().display_recipe() 
        print("name:{name}")  
        print("ingredients:{ingredients}") 

class NigerianRecipe(Recipe):
    
    def __init__(self,name,ingredients,preparation_time,cooking_method,nutritional_info):
        super().__init__(name,ingredients,preparation_time,cooking_method,nutritional_info)
        print("name:{name}")  
        print("ingredients:{ingredients}") 
        


    def display_recipe(self):
        super().display_recipe()
        print("name:{name}")  
        print("ingredients:{ingredients}") 
        