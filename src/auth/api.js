import axios from "axios";
import { Storage } from "../helpers/utils/storage";
import { Auth } from "../helpers/utils/auth";

export const API = process.env.REACT_APP_BASE_URL;

const token = () => Storage.getItem("token");
function headers() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

function authHeaders() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${token()}sd`,
  };
}

function queryString(params) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");
  return `${query.length ? "?" : ""}${query}`;
}

const api = {
  fetch(url, params = {}, auth = false) {
    return axios
      .get(`${API}${url}${queryString(params)}`, {
        headers: auth ? Auth.authHeader() : Auth.headers(),
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  },

  async post(url, { ...data }, auth = false) {
    return axios
      .post(`${API}${url}`, data, {
        headers: auth ? Auth.authHeader() : Auth.headers(),
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  },

  put(url, data, auth = false) {
    return fetch(`${API}${url}`, {
      headers: auth ? authHeaders() : headers(),
      // validateStatus: status => {
      //   return status >= 200 && status < 500;
      // },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then()
      .catch((err) => {});
  },

  patch(url, data, auth = false) {
    return axios
      .patch(
        `${url}`,
        { status: "resolved" },
        {
          headers: auth ? Auth.authHeader() : Auth.headers(),
        }
      )
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  },

  delete(url, { ...data }, auth = false) {
    return axios
      .delete(`${API}${url}`, {
        data: data,

        headers: auth ? Auth.authHeader() : Auth.headers(),
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  },
};

export default api;
