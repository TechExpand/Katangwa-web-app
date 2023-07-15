import axios from "axios";

export class Storage {
  static setItem(key, value) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getItem(key, defaultVal = {}) {
    let data;
    if (typeof window !== "undefined") {
      data = localStorage.getItem(key);
    }
    if (data == null) {
      return defaultVal;
    } else if (
      data.charAt(0) === "[" ||
      data.charAt(0) === "{" ||
      data.charAt(0) === '"'
    ) {
      return JSON.parse(data);
    } else {
      return data;
    }
  }

  static removeItem(key) {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }
}

export class Auth {
  static isAuthenticated() {
    const user = Storage.getItem("user");
    // if (user && user.token) {
    //   return true;
    // } else {
    //   return false;
    // }
    return !!user;
  }

  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
  static authHeader() {
    const user = Storage.getItem("user");
    if (user && user.token) {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      };
    } else {
      return {};
    }
  }
}

export const API = "https://katangwa.onrender.com";

// const token = () => Storage.getItem('token')
// function headers() {
//   return {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// }

// function authHeaders() {
//   return {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Token ${token()}sd`,
//   }
// }

function queryString(params) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");
  return `${query.length ? "?" : ""}${query}`;
}

const api = {
  fetch(url, params = {}, auth = true) {
    return axios
      .get(`${API}${url}${queryString(params)}`, {
        headers: auth ? Auth.authHeader() : Auth.headers(),
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  },

  async post(url, { ...data }, auth = true) {
    return axios
      .post(`${API}${url}`, data, {
        headers: auth ? Auth.authHeader() : Auth.headers(),
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  },

  async put(url, data, auth = true) {
    return axios
      .put(`${API}${url}`, data, {
        headers: auth ? Auth.authHeader() : Auth.headers(),
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
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

  async delete(url, auth = true) {
    return axios
      .delete(`${API}${url}`, {
        headers: auth ? Auth.authHeader() : Auth.headers(),
        validateStatus: (status) => {
          return status >= 200 && status < 500; // default
        },
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err);
      });
  },
};

export default api;
