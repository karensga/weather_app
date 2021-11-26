import React, {createContext, useState} from 'react'

export default ({ children }) => {
  const [city, setCity] = useState('368148')

  return <CityContext.Provider value={{city, setCity}}>{children}</CityContext.Provider>
}

export const CityContext = createContext()