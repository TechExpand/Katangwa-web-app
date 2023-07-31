import api from "../../../auth/api";
const getCategories = async () => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.fetch("/get-category");
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const categoryService = {
  getCategories,
};

export default categoryService;
