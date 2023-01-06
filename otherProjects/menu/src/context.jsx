import { useContext } from "react";
import { createContext,useState} from "react"
import sublinks from './data'
const AppContext=createContext();




export const AppProvider=({children}) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

const openSubmenu =() =>{
    setIsSubmenuOpen(true)
}
const closeSubmenu =() =>{
    setIsSubmenuOpen(false)
}
return <AppContext.Provider value={{openSubmenu, closeSubmenu,isSubmenuOpen}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}