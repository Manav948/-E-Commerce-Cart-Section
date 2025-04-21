import axios from "axios";
export const getAllItems = async () => {
    try {
        const responce = await axios.get('https://fakestoreapi.com/products')
        return responce.data;
    } catch (error) {
        console.error(error)
        return [];
    }
};
