import axios from 'axios';
const BASE_URL = "http://localhost:5000/api/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGQyOTJlOTVlMGJmMTBkYjQ5MzVjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMDc3Mzc2MSwiZXhwIjoxNzIxMDMyOTYxfQ.uYRl1wGsQrgU6NxTX9X7QOY_d_HtWid1Azei5ulasPg"
export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${token}`
    }
})