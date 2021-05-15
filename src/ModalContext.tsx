import {createContext, useContext} from "react";

export type ModalContextType = {
    id: number,
    open: boolean,
    setId: (key: number) => void,
    setOpen: (click: boolean) => void
}

export const ModalContext = createContext<ModalContextType>({
    id: -1,
    open: false,
    setId: id => console.log('card not clicked'),
    setOpen: open => console.log("modal not open")
})

export const useModal = () => useContext(ModalContext)