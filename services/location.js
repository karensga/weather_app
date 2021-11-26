import axios from 'axios'

export function getLocation({ location }) {
    const url = `https://www.metaweather.com/api/location/${location}`

    return axios.get(url)

}