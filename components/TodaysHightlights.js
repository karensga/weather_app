import CardState from './CardState'

const TodaysHightlights = ({ weatherLocation, loading }) => {
    return (
        <div className="bg-third w-full px-6 pb-5 pt-5 text-white space-y-8">
            <h1 className="text-lg font-semibold mb-5">Today’s Hightlights</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CardState
                    title={'Wind status'}
                    value={weatherLocation?.data.consolidated_weather[0].wind_speed.toFixed(1)}
                    abbreviation={'mph'}
                    loading={loading}
                >
                    <p className="text-sm">{weatherLocation?.data.consolidated_weather[0].wind_direction_compass}</p>

                </CardState>

                <CardState
                    title={'Humidity'}
                    value={weatherLocation?.data.consolidated_weather[0].humidity}
                    abbreviation={'%'}
                    loading={loading}
                >
                    <p className="text-sm">{weatherLocation?.data.consolidated_weather[0].wind_direction_compass}</p>

                </CardState>

                <CardState
                    title={'Visibility'}
                    value={weatherLocation?.data.consolidated_weather[0].visibility.toFixed(1)}
                    abbreviation={'miles'}
                    loading={loading}
                />

                <CardState
                    title={'Air Pressure'}
                    value={weatherLocation?.data.consolidated_weather[0].air_pressure}
                    abbreviation={'mb'}
                    loading={loading}
                />

            </div>
        </div>
    )
}

export default TodaysHightlights
