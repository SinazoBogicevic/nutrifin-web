import {createContext, useContext} from "react";
import {ModalContextType} from "./features/modaltypes";
import {NUTRITION} from "./utils/constants";

  
export const ModalContext = createContext<ModalContextType>({
    id: -1,
    open: false,
    mNutrition: NUTRITION,
    setId: id => console.log('card not clicked'),
    setOpen: open => console.log("modal not open"),
    setmNutrition: mNutrition => console.log("no nutrition fetched")
})

export const useModal = () => useContext(ModalContext)