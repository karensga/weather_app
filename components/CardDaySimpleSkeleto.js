import React from 'react'

const CardDaySimpleSkeleto = () => {
    return (
        <div className="w-full py-3 flex flex-col bg-primary text-white text-center">
            <div className="animate-pulse bg-secondary rounded w-2/3 h-5 mx-auto"></div>
            <div className="animate-pulse bg-secondary rounded w-2/3 h-10 mx-auto mt-3"></div>
            <div className="flex mt-3">
                <div className="animate-pulse bg-secondary rounded w-1/3 h-5 mx-auto"></div>
                <div className="animate-pulse bg-secondary rounded w-1/3 h-5 mx-auto"></div>
            </div>
        </div>
    )
}

export default CardDaySimpleSkeleto
