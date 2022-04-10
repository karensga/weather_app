import { useContext, useState } from 'react'

import Container from '../components/Container'
import {ProviverCityContext} from '../context/CityContext'
import ContainerWeather from '../components/ContainerWeather'


function HomePage() {
    
    
    return (
        <ProviverCityContext>
            <Container>
                <ContainerWeather />
            </Container>
        </ProviverCityContext>)
}

export default HomePage