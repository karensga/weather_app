import React, {createContext, useState} from 'react'

const CityContext = createContext({})

export const ProviverCityContext =  ({ children }) => {
  const [city, setCity] = useState('368148')

  return <CityContext.Provider value={{city, setCity}}>{children}</CityContext.Provider>
}

export default CityContext