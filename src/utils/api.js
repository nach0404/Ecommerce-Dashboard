const API_URL = 'http://localhost:3000/api'

export const getStats = async () => {
    const res = await fetch(`${API_URL}/stats`)
    return res.json()
}

export const getProducts = async () => {
    const res = await fetch(`${API_URL}/products`)
    return res.json()
}

export const getCategories = async () => {
    const res = await fetch(`${API_URL}/categories`)
    return res.json()
}