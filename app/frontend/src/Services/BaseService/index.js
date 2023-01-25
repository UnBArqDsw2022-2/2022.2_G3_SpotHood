import axios from 'axios'

const HOST = process.env.NODE_ENV === 'development' ?
(
  'http://localhost:8001'
) : (
  'https://api.github.com'
)

const APISpothood = axios.create({
  baseURL: "http://localhost:8001"
})

export {
  APISpothood
}