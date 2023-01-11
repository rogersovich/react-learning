import api from "./api.js";

export const listProduct = async () => {
  try {
    const response = await api.get("products?limit=5");

    return response;
  } catch (error) {
    return error.response;
  }
};
export const createProduct = async (payload) => {
  try {
    const response = await api.post("products/add", payload);

    return response;
  } catch (error) {
    return error.response;
  }
};