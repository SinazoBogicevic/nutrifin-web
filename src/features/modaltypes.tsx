import {Nutrition} from "./nutritiontypes"

export type ModalContextType = {
    id: number,
    open: boolean,
    mNutrition: Nutrition,
    setId: (key: number) => void,
    setOpen: (click: boolean) => void,
    setmNutrition: (list: Nutrition) => void
}