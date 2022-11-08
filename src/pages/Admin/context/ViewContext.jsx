import { useState, createContext } from "react"

export const ViewContext = createContext(null)

export const ViewContextProvider = ({children}) => {
  
  const [ selectedView, setSelectedView ] = useState("users")
  
  return (
    <ViewContext.Provider value={{selectedView, setSelectedView}}>
      {children}
    </ViewContext.Provider>
  )
}