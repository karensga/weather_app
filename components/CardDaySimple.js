import React from 'react'
import dayjs from "dayjs"
import Image from 'next/image'
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


const CardDaySimple = ({ max, min, state, date }) => {
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

    const dateFormat = dayjs(date).format('dd, D MMM')

    return (
        <div className="w-full py-3 flex flex-col bg-primary text-white text-center">
            <p className="w-full">{dateFormat}</p>
            <div className="w-14 mx-auto my-3">
                <Image src={imageOfDay(state)} alt="" className="w-10 h-auto" />
            </div>
            <div className="flex">
                <p className="w-1/2 m-0">{max}°C</p>
                <p className="w-1/2 m-0 text-secondary">{min}°C</p>
            </div>
        </div>
    )
}

export default CardDaySimple