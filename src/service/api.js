import axios from "axios";
export const getAllItems = async () => {
    try {
        const responce = await axios.get('https://dummyjson.com/products/')
        return responce.data.products;
    } catch (error) {
        console.error(error)
        return [];
    }
};

export const searchItems = async (query) => {  
    try {
        const responce = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
        return responce.data.products;
    } catch (error) {
        console.error(error)
        return [];
    }
} 