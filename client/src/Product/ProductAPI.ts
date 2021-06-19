import axios, { AxiosResponse } from 'axios'

const urlBase = 'http://localhost:8000/api'

const ProductAPI = {
    // TODO: update typing on product get call
    // TODO: add single product get call
    // TODO: add single product post
    // TODO: add single product delete
    // TODO: update product data with new properties
    getProducts: async (): Promise<any[]> => {
        return axios
            .get(`${urlBase}/products`)
            .then((response: AxiosResponse) => {
                // console.log('response data', response.data)
                return response.data as any
            })
    },
}

export default ProductAPI
