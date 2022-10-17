import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5500' })

// this sends our token to our backend middleware to verify if user logged in
// before running the logic below it
API.interceptors.request.use(req => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchItems = () => API.get('/items')
export const addItem = newItem => API.post('/items', newItem)
export const updateCart = (id, updatedCart) => API.patch(`/items/${id}`, updatedCart)
export const deleteItem = id => API.delete(`/items/${id}`)

export const signIn = form => API.post('/user/signin', form)
export const signUp = form => API.post('/user/signup', form)