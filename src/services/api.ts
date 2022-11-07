import axios from 'axios'
import { getCookie } from 'cookies-next'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    withCredentials: true,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}
