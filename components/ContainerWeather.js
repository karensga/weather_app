import React,{ useState } from 'react'
import InfoCity from '../components/InfoCity'
import SearchLocation from '../components/SearchLocation'
import ListOfDays from '../components/ListOfDays'
import TodaysHightlights from '../components/TodaysHightlights'
import { useWeatherLocation } from '../hooks/useWeatherLocation'

const ContainerWeather = () => {

    const { weatherLocation, loading } = useWeatherLocation()
    const [openSearch, setOpenSearch] = useState(false)

    const changeOpenSearch = () => {
        setOpenSearch(!openSearch)
    }

  return (
      <>
    {
        !openSearch ?
        <InfoCity openSearch={changeOpenSearch} weatherLocation={weatherLocation} loading={loading} />
        :
        <SearchLocation closeSearch={changeOpenSearch} />
    }
    <div className="bg-third w-full sm:w-9/12 lg:px-32">
        <ListOfDays loading={loading} days={weatherLocation} />
        <TodaysHightlights loading={loading} weatherLocation={weatherLocation} />
    </div>
    </>
  )
}

export default ContainerWeather