export type productNutrients = {
    name: string,
    amount:number
    unit: string,
  
  }

export type productNutrition  = {
    caloricBreakdown: string[],
    calories: number
    carbs: string
    fat: string
    nutrients: productNutrients[]
    }

export type Nutrition = {
    title:string,
    importantBadges: string[],
    nutrition: productNutrition,
    description: string,
    ingredientList:string,
    images: string[]
}
