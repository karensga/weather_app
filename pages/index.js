import { useContext, useState } from 'react'
import InfoCity from '../components/InfoCity'
import SearchLocation from '../components/SearchLocation'
import ListOfDays from '../components/ListOfDays'
import Container from '../components/Container'
import TodaysHightlights from '../components/TodaysHightlights'
import { useWeatherLocation } from '../hooks/useWeatherLocation'
import CityProvider from '../context/CityContext'


/* import LocationOnIcon from '@material-ui/icons/AirlineSeatFlatOutlined' */

function HomePage() {

    
    const { weatherLocation, loading } = useWeatherLocation()
    const [openSearch, setOpenSearch] = useState(false)

    const changeOpenSearch = () => {
        setOpenSearch(!openSearch)
    }

    return (
        <CityProvider>
            <Container>
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
            </Container>
        </CityProvider>)
}

export default HomePage