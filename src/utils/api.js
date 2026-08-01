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

export const getProductById = async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`)
    return res.json()
}

export const updateProduct = async (id, data) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res.json()
}

export const deleteProduct = async (id) => {
    await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
    })
}