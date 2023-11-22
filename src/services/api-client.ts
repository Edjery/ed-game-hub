import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '084b3ea1a4ed4a6eb508127dc27060e9'
    }
})