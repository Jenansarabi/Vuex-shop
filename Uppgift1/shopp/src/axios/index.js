import axios from 'axios'


//skappad ny instance av axios med basse url
export default axios.create({
    baseURL: 'http://localhost:9999/api'

})