import { useEffect, useState, useContext } from 'react'
import { getLocation } from '../services/location'
import CityContext  from '../context/CityContext'

export const useWeatherLocation = () => {

    const {city, setCity} = useContext(CityContext)
    const [weatherLocation, setWeatherLocation] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getLocation({ location:city })  
            .then(res => {
                setWeatherLocation(res)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [city])


    return { weatherLocation, loading, setCity }

}

