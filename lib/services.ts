import axios from "axios";

//fetch all categories
export const fetchCategories = async() => {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

//fetch based on category
export const fetchOnCategory = async(payload:string) => {
    return axios
      .get(`https://fakestoreapi.com/products/category/${payload}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  };