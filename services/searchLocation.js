import axios from 'axios'

export default function getSearchLocation({ keyword }) {
    const url = `https://www.metaweather.com/api/location/search/?query=${keyword}`

    return axios.get(url)
}