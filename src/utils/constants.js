//App Text
export const APP_TITLE = "Nutrifin"
export const WELCOME_MESSAGE = "Find out what's in the food you eat"
export const SEARCH_GREETING = "Hi,"
export const SEARCH_MESSAGE = "Let's get you healthy!"
export const PLACEHOLDER = "search"
export const RESULTS_FOR = "Results for "
export const NO_RESULTS = "results"

// nutrient types fallback variables

export const  NUTRIENTS = {
    name: '',
    amount: -1,
    unit: '',
}

export const PRODUCTNUTRIENTS = {
    caloricBreakdown: [''],
    calories: -1,
    carbs: '',
    fat: '',
    nutrients: [NUTRIENTS]
}

export const NUTRITION = {
    title:'',
    importantBadges: [''],
    nutrition: PRODUCTNUTRIENTS,
    description: '',
    ingredientList: '',
    images: ['']
  }

  // actual context