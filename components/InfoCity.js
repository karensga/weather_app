import { useContext } from 'react'
import Image from 'next/image'
import cloudBackingImage from '../public/Cloud-background.png'
import { useWeatherLocation } from '../hooks/useWeatherLocation'
import dayjs from 'dayjs'
import sn from '../public/Snow.png'
import sl from '../public/Sleet.png'
import h from '../public/Hail.png'
import t from '../public/Thunderstorm.png'
import hr from '../public/HeavyRain.png'
import lr from '../public/LightRain.png'
import s from '../public/Shower.png'
import hc from '../public/HeavyCloud.png'
import lc from '../public/LightCloud.png'
import c from '../public/Clear.png'


const Main = ({ openSearch, weatherLocation, loading }) => {
    /* const { weatherLocation, loading } = useWeatherLocation() */

    const imageOfDay = (condition) => {
        const image = {
            sn: sn,
            sl: sl,
            h: h,
            t: t,
            hr: hr,
            lr: lr,
            s: s,
            hc: hc,
            lc: lc,
            c: c
        }

        return image[condition]
    }

    return (
        <div className="bg-primary pb-6 sm:w-4/12 lg:w-3/12">
            <div className="w-full flex justify-between px-3 pt-4">
                <button className="h-10 px-3 bg-four text-white" onClick={() => openSearch()}>
                    Search for pleaces
                </button>
            </div>
            <div className="w-full h-72 relative flex justify-center items-center">
                <Image src={cloudBackingImage} alt="" className="h-full opacity-10" />
                <div className={`w-36 absolute top-auto bottom-auto left-auto right-auto`}>
                    {
                        loading ?
                            <div className="rounded animate-pulse bg-secondary w-2/3 h-20 mx-auto my-auto"></div>
                            :
                            weatherLocation &&
                            <Image src={imageOfDay(weatherLocation?.data.consolidated_weather[0].weather_state_abbr)} alt="" className="w-full h-auto" />
                    }
                </div>
            </div>
            <div className="text-center text-secondary">
                {
                    loading ?
                        <div className="rounded animate-pulse bg-secondary w-1/3 h-14 mx-auto"></div>
                        :
                        <h1 className="text-7xl text-white text-center font-bold">
                            {Math.round(weatherLocation?.data.consolidated_weather[0].the_temp)}
                            <span className="text-2xl text-secondary">°C</span>
                        </h1>
                }
                {
                    loading ?
                        <div className="my-8 rounded animate-pulse bg-secondary w-2/3 h-10 mx-auto"></div>
                        :
                        <p className="text-4xl my-8">{weatherLocation?.data.consolidated_weather[0].weather_state_name}</p>
                }
                <p className="text-lg">Today <span className="text-xl"> · </span>{loading ? <div className="animate-pulse bg-secondary rounded w-1/3 h-5 mx-auto my-4"></div> : dayjs(weatherLocation?.data.consolidated_weather[0].applicable_date).format('dd, D MMM')}</p>
                {
                    loading ?
                        <div className="animate-pulse bg-secondary rounded w-2/3 h-5 mx-auto my-4 mt-3"></div>
                        :
                        <p className="text-lg mt-3"> {/* <LocationOnIcon /> */} {weatherLocation?.data.title}</p>
                }
            </div>
        </div>
    )
}

export default Main
