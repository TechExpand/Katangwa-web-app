import api from "../../../auth/api";
const getServices = async () => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.fetch("/get-products?type=SERVICE");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
const getProducts = async () => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.fetch("/get-products?type=PRODUCT");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getOtherProductsByUser = async (userId) => {
  try {
    const res = await api.fetch(
      `/get-other-productservice?type=PRODUCT&id=${userId}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getProductById = async (id) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.fetch(`/get-single-product?id=${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const productService = {
  getProducts,
  getServices,
  getProductById,
  getOtherProductsByUser,
};

export default productService;
