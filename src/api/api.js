import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/carts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async productId => {
  try {
    const response = await axios.post(`${BASE_URL}/carts`, {
      userId: 1,
      date: new Date(),
      products: [
        {
          productId,
          quantity: 1,
        },
      ],
    });

    return response.data;
  } catch (error) {
    console.log('Add to cart error:', error);
    return null;
  }
};

export const getSingleCart = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/carts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/carts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};