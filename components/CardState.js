import React from 'react'

const CardState = ({ title, value, abbreviation, children, loading }) => {
    return (
        <div className="bg-primary text-center py-4">
            {
                loading ?
                    <>
                        <div className="animate-pulse bg-secondary rounded w-2/3 h-5 mx-auto"></div>
                        <div className="animate-pulse bg-secondary rounded w-2/3 h-10 mx-auto my-4"></div>
                        <div className="animate-pulse bg-secondary rounded w-2/3 h-5 mx-auto my-4"></div>
                    </>
                    :
                    <>
                        <h1 className="text-md text-center">{title}</h1>
                        <p className="text-6xl my-4 font-bold">{value}<span className="text-4xl font-medium"> {abbreviation}</span> </p>
                    </>
            }
            {children}
        </div>
    )
}

export default CardState
