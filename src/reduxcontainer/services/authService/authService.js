import api from "../../../auth/api";
const login = async (email, password) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.post("/login", { email, password });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

const signup = async (fullname, email, password) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.post("/register", { fullname, email, password });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

const authService = {
  login,
  signup,
};

export default authService;
