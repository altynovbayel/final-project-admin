import instance from "./api";

export const createProduct = data => instance.post('/products/.json', data)

export const createCategory = data => instance.post('/categories/.json', data)

export const getAllCategories = () => instance.get('/categories/.json')