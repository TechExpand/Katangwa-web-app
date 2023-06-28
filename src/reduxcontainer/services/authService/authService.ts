// import axios from 'axios';
import api from '../../../auth/api';



const login = async (email: string, password: string) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.post('/auth/login', { email, password });
    return res.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};



const register = async (email: string, first_name: string, last_name: string, phone: string) => {
  try {
    const res = await api.post(
      '/auth/register',
      {
        email,
        first_name,
        last_name,
        phone,
      },
      true
    );
    return res.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const logout = async (email: string) => {
  try {
    const res = await api.post('/auth/logout', { email }, true);
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};

const authService = {
  login,
  register,
  logout
};

export default authService;
