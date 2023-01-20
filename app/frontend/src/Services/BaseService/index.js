import axios from 'axios'

const HOST = process.env.NODE_ENV === 'development' ?
(
  'http://localhost:3000'
) : (
  'endereço do host...'
)

const APISpothood = axios.create({
  baseURL: "https://api.github.com",
})

export {
  APISpothood
}