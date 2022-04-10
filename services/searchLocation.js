import axios from 'axios'

export default function getSearchLocation({ keyword }) {
    const url = `https://whispering-stream-43221.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${keyword}`

    return axios.get(url)
}