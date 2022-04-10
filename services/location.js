import axios from 'axios'

export function getLocation({ location }) {
    const url = `https://whispering-stream-43221.herokuapp.com/https://www.metaweather.com/api/location/${location}`

    return axios.get(url)  

}