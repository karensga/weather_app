import { useState, useContext } from 'react'
import { useSearchLocation } from '../hooks/useSearchLocation'
import { CityContext } from '../context/CityContext'

const SearchLocation = ({ closeSearch }) => {

    const [keyword, setKeyword] = useState('')
    const { loading, dataCities } = useSearchLocation({ keyword })
    const { setCity, city } = useContext(CityContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))
        const dataToObject = Object.fromEntries(data)
        setKeyword(dataToObject.search)
    }
console.log(city)
    const selectCity = (city) => {
        setCity(`${city.woeid}`)
        closeSearch()
    }

    return (
        <div className="bg-primary sm:w-4/12 lg:w-3/12 px-6 pt-6">
            <form className="flex h-12 mt-10" onSubmit={handleSubmit}>
                <input type="text" placeholder="search location" className="text-white px-3 focus:outline-none bg-transparent border-white border placeholder-gray-100 w-7/12" name="search" />
                <button type="submit" className="bg-indigo-600 text-white w-4/12 px-3 ml-auto text-white" >Search</button>
            </form>

            <div className="text-white flex flex-col mt-10">
                {
                    dataCities.map(city => {
                        return <button key={city.woeid} onClick={() => selectCity(city)} className="mb-3 focus:outline-none w-full h-14 text-left px-3 hover:border " >
                            {city.title} <span>  </span>
                        </button>
                    })
                }

            </div>
        </div>
    )
}

export default SearchLocation
