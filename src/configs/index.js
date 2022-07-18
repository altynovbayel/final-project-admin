import instance from "./api";

export const createProduct = data => instance.post('/products/.json', data)

export const createCategory = data => instance.post('/categories/.json', data)

export const getAllCategories = () => instance.get('/categories/.json')

export const getAllProducts = () => instance.get('/products/.json')

export const editProduct = (id, data) => instance.patch(`/products/${id}/.json`, data)

export const removeProduct = (id) => instance.delete(`/products/${id}/.json`)

export const editContacts = (data) => instance.patch('/contacts/.json', data)

export const getContacts = () => instance.get('/contacts/.json')

export const getOrders = () => instance.get('/orders/.json')

export const getSingleOrder = (user, product) => instance.get(`/orders/${user}/${product}/.json`)

export const acceptOrder = (user, product, data) => instance.patch(`/orders/${user}/${product}/.json`, data)