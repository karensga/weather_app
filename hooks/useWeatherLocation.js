import { useEffect, useState, useContext } from 'react'
import { getLocation } from '../services/location'
import { CityContext } from '../context/CityContext'

export const useWeatherLocation = (/* { location } = { location:  } */) => {

    const [weatherLocation, setWeatherLocation] = useState()
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState('368148')
    const city = useContext(CityContext)


    useEffect(() => {

        setLocation(city?.city)
    },[city])

    useEffect(() => {
        setLoading(true)
        getLocation({ location })
            .then(res => {
                setWeatherLocation(res)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [location])


    return { weatherLocation, loading }

}

