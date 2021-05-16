import {createContext, useContext} from "react";

export type Nutrition = {
    title:string,
    importantBadges: string[],
    nutritionInfo: string[],
    description: string,
    ingredientList:string,
    images: string[]
}


export type ModalContextType = {
    id: number,
    open: boolean,
    nutrition: Nutrition,
    setId: (key: number) => void,
    setOpen: (click: boolean) => void,
    setNutrition: (list: Nutrition) => void
}

const info = {
    title:'',
    importantBadges: [''],
    nutritionInfo: [''],
    description: '',
    ingredientList: '',
    images: ['']
  }

export const ModalContext = createContext<ModalContextType>({
    id: -1,
    open: false,
    nutrition: info,
    setId: id => console.log('card not clicked'),
    setOpen: open => console.log("modal not open"),
    setNutrition: nutrition => console.log("no nutrition fetched")
})

export const useModal = () => useContext(ModalContext)