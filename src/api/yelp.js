import axios from 'axios'
import { YELP_API_KEY } from '../../config/keys'

const API_KEY = 'Bearer ' + YELP_API_KEY
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: API_KEY 
  }
})