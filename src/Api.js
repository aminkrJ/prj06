import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
})

const api = axios.create({
  adapter: cache.adapter
})

export default api
