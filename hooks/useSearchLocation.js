import { useState, useEffect } from 'react'
import searchLocation from '../services/searchLocation'

export const useSearchLocation = ({ keyword }) => {

    const [loading, setLoading] = useState(false)
    const [dataCities, setDataCities] = useState([])

    useEffect(() => {
        setLoading(true)
        if (keyword) {
            searchLocation({ keyword })
                .then(res => {
                    setDataCities(res.data)
                })
                .catch(err => console.log(err))
        }
        setLoading(false)
    }, [keyword])

    return { loading, dataCities }
}