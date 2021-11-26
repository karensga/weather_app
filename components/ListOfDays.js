import React from 'react'
import CardDaySimple from './CardDaySimple'
import CardDaySimpleSkeleto from './CardDaySimpleSkeleto'

const ListOfDays = ({ days, loading }) => {
    return (
        <div className="bg-third px-6 pt-8 pb-5 grid grid-cols-2 sm:grid-cols-5 gap-8 ">
            {   loading ?
                <>
                    <CardDaySimpleSkeleto />
                    <CardDaySimpleSkeleto />
                    <CardDaySimpleSkeleto />
                    <CardDaySimpleSkeleto />
                    <CardDaySimpleSkeleto />
                </>
                :
                days?.data.consolidated_weather.map((item, index) => index != 0 &&
                    <CardDaySimple
                        date={item.applicable_date}
                        state={item.weather_state_abbr}
                        max={Math.round(item.max_temp)}
                        min={Math.round(item.min_temp)}
                        key={index}
                    />
                )

            }
        </div>
    )
}

export default ListOfDays
