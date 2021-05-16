import {createContext, useContext} from "react";

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


export type ModalContextType = {
    id: number,
    open: boolean,
    mNutrition: Nutrition,
    setId: (key: number) => void,
    setOpen: (click: boolean) => void,
    setmNutrition: (list: Nutrition) => void
}

const  nutrients = {
    name: '',
    amount: -1,
    unit: '',
}

const productNutri = {
    caloricBreakdown: [''],
    calories: -1,
    carbs: '',
    fat: '',
    nutrients: [nutrients]
}

const info = {
    title:'',
    importantBadges: [''],
    nutrition: productNutri,
    description: '',
    ingredientList: '',
    images: ['']
  }

export const ModalContext = createContext<ModalContextType>({
    id: -1,
    open: false,
    mNutrition: info,
    setId: id => console.log('card not clicked'),
    setOpen: open => console.log("modal not open"),
    setmNutrition: mNutrition => console.log("no nutrition fetched")
})

export const useModal = () => useContext(ModalContext)